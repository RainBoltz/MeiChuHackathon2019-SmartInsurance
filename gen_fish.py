import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
from matplotlib.offsetbox import TextArea, DrawingArea, OffsetImage, AnnotationBbox
from tqdm import trange

AREA_GRID = 40
TANK_SIZE = (800, 600)

class fish:
    def __init__(self, lifetime):
        self.face = np.random.randint(0,4)
        self.coord = [ (TANK_SIZE[i]-40)*np.random.random() for i in range(2) ]
        self.lifetime = lifetime
        self.current_speed = [ 5*np.random.random()-2.5 for i in range(2) ]
        self.is_dead = (lifetime <= 0)
    
    def next(self, trigger_dead=False):
        if trigger_dead:
            self.lifetime = min(np.random.randint(1,4), self.lifetime)
        if self.is_dead:
            self.coord[1] += 25
            if self.coord[1] >= 600:
                self.coord[1] = 600
            return
            
            
        self.face = np.random.randint(0,4)
        self.current_speed[0] += 5*np.random.random()-2.5
        if self.coord[0] + self.current_speed[0] < 0:
            self.coord[0] = 0
        elif self.coord[0] + self.current_speed[0] > 800:
            self.coord[0] = 800
        else:
            self.coord[0] += self.current_speed[0]
        self.current_speed[1] += 5*np.random.random()-2.5
        if self.coord[1] + self.current_speed[1] < 0:
            self.coord[1] = 0
        elif self.coord[1] + self.current_speed[1] > 600-60:
            self.coord[1] = 600-60
        else:
            self.coord[1] += self.current_speed[1]
        self.lifetime -= 1
        if self.lifetime == 0:
            self.is_dead = True
        elif np.random.randint(1,1000) == 500: #隨機死亡
            self.is_dead = True


class tank:
    def __init__(self, fish_amount, fname_start=None):
        self.fish_all = [ fish(1000) for _ in range(fish_amount) ]
        self.fish_front_img = mpimg.imread('fish_face_front.png')
        self.fish_back_img = mpimg.imread('fish_face_back.png')
        self.fish_right_img = mpimg.imread('fish_face_right.png')
        self.fish_left_img = mpimg.imread('fish_face_left.png')
        self.fish_dead = mpimg.imread('fish_dead.png')
        self.fname = fname_start
        
    def render_fish(self):
        fig, ax = plt.subplots()
        ax.set_xlim(0, 800)
        ax.set_ylim(0, 600)
        for f in self.fish_all:
            if f.is_dead:
                imagebox = OffsetImage(self.fish_dead, zoom=0.3)
            elif f.face == 0:
                imagebox = OffsetImage(self.fish_front_img, zoom=0.3)
            elif f.face == 1:
                imagebox = OffsetImage(self.fish_left_img, zoom=0.3)
            elif f.face == 2:
                imagebox = OffsetImage(self.fish_right_img, zoom=0.3)
            elif f.face == 3:
                imagebox = OffsetImage(self.fish_back_img, zoom=0.3)
            ab = AnnotationBbox(imagebox, f.coord, frameon=False)
            ax.add_artist(ab)
        plt.draw()
        death = sum(1 for f in self.fish_all if f.is_dead)
        alive = len(self.fish_all) - death
        plt.title('Death: %d, Alive: %d'%(death, alive))
        if self.fname != None:
            plt.savefig('fish/%03d.png'%self.fname)
            self.fname += 1
        #plt.show()
        plt.close()

    def next(self, disaster=False, add_some=0):
        if disaster:
            dead_fish = np.random.choice(len(self.fish_all), int(len(self.fish_all)*0.45), replace=False)
        if add_some > 0:
            self.fish_all = [ f for f in self.fish_all if not f.is_dead ]
            for _ in range(add_some):
                self.fish_all.append(fish(1000))

        
        self.render_fish()
        
        for i in range(len(self.fish_all)):
            if disaster:
                if i in dead_fish:
                    self.fish_all[i].next(trigger_dead=True)
                else:
                    self.fish_all[i].next()
            else:
                self.fish_all[i].next()


if __name__ == "__main__":
    df = pd.read_csv("data.csv", encoding='utf-8-sig')
    DEAD = []
    ALIVE = []
    myTank = tank(200, fname_start=0)

    for t in trange(len(df), ascii=True):
        death = sum(1 for f in myTank.fish_all if f.is_dead)
        alive = len(myTank.fish_all) - death
        DEAD.append(death)
        ALIVE.append(alive)
        if t == 53-1:
            myTank.next(disaster=True)
        elif t == 100:
            myTank.next(add_some=100)
        elif t == 338-1:
            myTank.next(disaster=True)
        elif t == 392:
            myTank.next(add_some=75)
        else:
            myTank.next()

    df["死亡數量"] = DEAD
    df['存活數量'] = ALIVE

    df.to_csv("data2.csv", encoding="utf-8-sig", index=False)

    



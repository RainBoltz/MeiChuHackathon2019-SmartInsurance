var optionsline2 = {
    chart: {
      id: 'tw',
      group: 'social',
      type: 'line',
      events: {
        click: function(event, chartContext, config) {
          //console.log(chartContext, config);
          var ind = config.dataPointIndex;
          document.getElementById("fish_img_div").style.backgroundImage = 'url("img/fish/'+ fish_img[ind] +'")';
          document.getElementById("fish_img_div").style.backgroundSize = "cover";
          document.getElementById("bc_obj").innerHTML = library.json.prettyPrint(bc[ind]);
          //console.log(library.json.prettyPrint(bc[ind]));
        }
      }
    },
    colors: ['#546E7A'],
    series: [{
      data: [
        [1514764802000,7.8],[1514768400000,8.3],[1514772000000,7.6],[1514775600000,7.3],[1514779200000,8.1],[1514782800000,8.4],[1514786400000,7.5],[1514790010000,7.5],[1514793610000,7.5],[1514797210000,7.1],[1514800810000,8.2],[1514804410000,7.7],[1514808010000,8.1],[1514811608000,8.0],[1514815208000,7.0],[1514818808000,7.7],[1514822408000,6.8],[1514826008000,8.5],[1514829608000,8.5],[1514833205000,8.2],[1514836805000,8.2],[1514840405000,8.2],[1514844005000,8.2],[1514847605000,8.0],[1514851205000,8.1],[1514854803000,8.3],[1514858403000,6.7],[1514862003000,7.5],[1514865603000,7.0],[1514869203000,8.2],[1514872803000,6.9],[1514876401000,6.8],[1514880001000,7.8],[1514883601000,6.9],[1514887201000,8.3],[1514890801000,8.3],[1514894401000,6.5],[1514898011000,7.3],[1514901611000,6.7],[1514905211000,7.4],[1514908811000,8.0],[1514912411000,8.2],[1514916011000,7.4],[1514919608000,6.6],[1514923208000,7.5],[1514926808000,8.3],[1514930408000,8.3],[1514934008000,8.2],[1514937608000,8.3],[1514941206000,8.0],[1514944806000,6.5],[1514948406000,7.3],[1514952006000,7.2],[1514955606000,7.3],[1514959206000,6.8],[1514962804000,7.3],[1514966404000,8.0],[1514970004000,7.4],[1514973604000,7.3],[1514977204000,7.1],[1514980804000,6.9],[1514984402000,7.1],[1514988002000,8.2],[1514991602000,7.2],[1514995202000,8.2],[1514998802000,7.0],[1515002402000,6.5],[1515006011000,7.3],[1515009611000,7.9],[1515013211000,7.7],[1515016811000,8.3],[1515020411000,8.2],[1515024011000,8.2],[1515027609000,8.0],[1515031209000,8.0],[1515034809000,7.8],[1515038409000,7.1],[1515042009000,8.1],[1515045609000,7.3],[1515049207000,8.1],[1515052807000,6.7],[1515056407000,7.0],[1515060007000,8.3],[1515063607000,6.8],[1515067207000,7.1],[1515070805000,8.2],[1515074405000,8.4],[1515078005000,8.1],[1515081605000,6.7],[1515085205000,7.5],[1515088805000,6.8],[1515092402000,7.9],[1515096002000,7.2],[1515099602000,8.5],[1515103202000,8.3],[1515106802000,8.1],[1515110402000,8.1],[1515114002000,8.4],[1515117602000,7.7],[1515121202000,7.1],[1515124802000,8.3],[1515128402000,7.8],[1515132002000,6.9],[1515135600000,6.5],[1515139200000,7.3],[1515142800000,8.3],[1515146400000,6.6],[1515150000000,7.0],[1515153600000,8.3],[1515157210000,8.3],[1515160810000,8.2],[1515164410000,8.0],[1515168010000,8.0],[1515171610000,7.9],[1515175210000,7.9],[1515178806000,7.8],[1515182406000,7.8],[1515186006000,7.8],[1515189606000,7.7],[1515193206000,7.7],[1515196806000,7.7],[1515200404000,8.0],[1515204004000,8.1],[1515207604000,8.1],[1515211204000,8.0],[1515214804000,7.5],[1515218404000,6.6],[1515222002000,7.2],[1515225602000,6.6],[1515229202000,6.7],[1515232802000,6.7],[1515236402000,7.3],[1515240002000,7.2],[1515243602000,8.4],[1515247202000,8.2],[1515250802000,8.1],[1515254402000,8.0],[1515258002000,7.9],[1515261602000,7.8],[1515265210000,7.8],[1515268810000,7.8],[1515272410000,7.7],[1515276010000,7.7],[1515279610000,7.7],[1515283210000,7.8],[1515286808000,7.9],[1515290408000,8.0],[1515294008000,8.0],[1515297608000,8.0],[1515301208000,8.1],[1515304808000,8.1],[1515308406000,8.2],[1515312006000,8.3],[1515315606000,8.2],[1515319206000,8.1],[1515322806000,8.1],[1515326406000,8.1],[1515330004000,8.0],[1515333604000,7.9],[1515337204000,7.8],[1515340804000,7.8],[1515344404000,7.7],[1515348004000,7.6],[1515351601000,7.6],[1515355201000,7.6],[1515358801000,7.6],[1515362401000,7.6],[1515366001000,7.6],[1515369601000,7.7],[1515373211000,7.7],[1515376811000,7.8],[1515380411000,7.9],[1515384011000,7.8],[1515387611000,8.2],[1515391211000,8.3],[1515394809000,8.3],[1515398409000,7.2],[1515402009000,7.3],[1515405609000,6.7],[1515409209000,8.5],[1515412809000,8.3],[1515416407000,8.2],[1515420007000,8.0],[1515423607000,8.0],[1515427207000,7.9],[1515430807000,7.8],[1515434407000,7.8],[1515438004000,7.8],[1515441604000,7.8],[1515445204000,7.7],[1515448804000,7.7],[1515452404000,7.7],[1515456004000,7.8],[1515461594000,8.0],[1515463202000,8.0],[1515466802000,8.0],[1515470402000,7.9],[1515474002000,6.5],[1515477602000,7.7],[1515481202000,6.8],[1515484800000,8.2],[1515488400000,8.1],[1515492000000,7.9],[1515495600000,6.5],[1515499200000,8.5],[1515502800000,8.3],[1515506410000,8.2],[1515510010000,8.1],[1515513610000,8.0],[1515517210000,7.9],[1515520810000,7.9],[1515524408000,7.8],[1515528008000,7.8],[1515531608000,7.7],[1515535208000,7.7],[1515538808000,7.7],[1515542408000,7.9],[1515546008000,8.1],[1515549608000,8.2],[1515553208000,8.2],[1515556808000,7.9],[1515560408000,6.5],[1515564008000,6.6],[1515567608000,8.0],[1515571206000,8.5],[1515574806000,6.8],[1515578406000,7.2],[1515582006000,7.9],[1515585606000,7.5],[1515589206000,7.1],[1515592804000,8.2],[1515596404000,7.8],[1515600004000,7.4],[1515603604000,8.5],[1515607204000,8.4],[1515610801000,8.4],[1515614401000,8.3],[1515618001000,8.2],[1515621601000,8.1],[1515625201000,8.1],[1515628801000,8.3],[1515632410000,8.2],[1515636010000,6.9],[1515639610000,7.7],[1515643210000,7.8],[1515646810000,6.9],[1515650410000,7.1],[1515654010000,8.3],[1515657610000,8.3],[1515661210000,7.9],[1515664810000,8.0],[1515668410000,8.3],[1515672010000,7.1],[1515675608000,8.1],[1515679208000,8.3],[1515682808000,7.7],[1515686408000,7.2],[1515690008000,6.6],[1515693608000,8.4],[1515697204000,8.0],[1515700804000,8.0],[1515704404000,8.5],[1515708004000,8.5],[1515711604000,8.4],[1515715204000,6.7],[1515718802000,7.1],[1515722402000,8.1],[1515726002000,7.6],[1515729602000,6.9],[1515733202000,7.9],[1515736802000,8.2],[1515740400000,7.5],[1515744000000,8.5],[1515747600000,8.0],[1515751200000,7.7],[1515754800000,7.3],[1515758400000,8.0],[1515762010000,7.4],[1515765610000,7.5],[1515769210000,6.5],[1515772810000,7.3],[1515776410000,7.0],[1515780010000,8.5],[1515783607000,7.8],[1515787207000,8.4],[1515790807000,6.9],[1515794407000,7.0],[1515798007000,7.3],[1515801607000,7.8],[1515805205000,8.0],[1515808805000,8.5],[1515812405000,6.9],[1515816005000,8.0],[1515819605000,8.2],[1515823205000,7.8],[1515826803000,6.9],[1515830403000,6.9],[1515834003000,7.4],[1515837603000,8.3],[1515841203000,7.6],[1515844803000,7.7],[1515848401000,6.9],[1515852001000,6.6],[1515855601000,8.2],[1515859201000,6.9],[1515862801000,6.7],[1515866401000,8.1],[1515870010000,7.4],[1515873610000,7.2],[1515877210000,7.1],[1515880810000,7.7],[1515884410000,7.6],[1515888010000,6.7],[1515891608000,7.2],[1515895208000,8.2],[1515898808000,7.7],[1515902408000,6.6],[1515906008000,8.1],[1515909608000,7.7],[1515913208000,7.0],[1515916808000,7.2],[1515920408000,7.4],[1515924008000,7.8],[1515927608000,7.9],[1515931208000,8.2],[1515934808000,8.1],[1515938408000,8.9],[1515942008000,8.6],[1515945608000,8.7],[1515964408000,8.4],[1515964408000,8.7],[1515964408000,9.0],[1515964408000,8.5],[1515964408000,8.6],[1515967204000,8.8],[1515970804000,8.6],[1515974404000,7.9],[1515978004000,7.6],[1515981604000,6.6],[1515985204000,7.0],[1515988802000,6.9],[1515992402000,6.7],[1515996002000,7.5],[1515999602000,7.1],[1516003202000,8.5],[1516006802000,7.3],[1516010400000,8.1],[1516014000000,7.9],[1516017600000,7.4],[1516021200000,7.0],[1516024800000,6.7],[1516028400000,6.7],[1516032010000,8.0],[1516035610000,8.2],[1516039210000,8.4],[1516042810000,7.7],[1516046410000,7.4],[1516050010000,6.8],[1516053606000,6.6],[1516057206000,7.0],[1516060806000,7.2],[1516064406000,8.5],[1516068006000,7.4],[1516071606000,7.1],[1516075204000,7.4],[1516078804000,7.8],[1516082404000,6.5],[1516086004000,7.6],[1516089604000,8.0],[1516093204000,7.2],[1516096802000,6.5],[1516100402000,7.0],[1516104002000,8.2],[1516107602000,8.3],[1516111202000,7.4],[1516114802000,8.5],[1516118400000,6.6],[1516122000000,7.3],[1516125600000,7.3],[1516129200000,8.5],[1516132800000,7.8],[1516136400000,7.5],[1516140009000,7.6],[1516143609000,7.0],[1516147209000,7.3],[1516150809000,7.2],[1516154409000,7.9],[1516158009000,7.8],[1516161607000,7.4],[1516165207000,7.9],[1516168807000,7.0],[1516172407000,7.3],[1516176007000,7.0],[1516179607000,7.5],[1516183205000,7.7],[1516186805000,6.8],[1516190405000,7.5],[1516194005000,6.8],[1516197605000,8.4],[1516201205000,7.6],[1516204803000,7.4],[1516208403000,7.0],[1516212003000,7.5],[1516215603000,8.1],[1516219203000,7.1],[1516222803000,6.8],[1516226400000,8.0],[1516230000000,6.8],[1516233600000,6.8],[1516237200000,7.7],[1516240800000,6.6],[1516244400000,7.5],[1516248010000,7.6],[1516251610000,8.1],[1516255210000,6.8],[1516259926000,6.7],[1516262410000,7.5],[1516266010000,7.2],[1516269610000,7.6],[1516273210000,8.2],[1516276810000,7.1],[1516280408000,7.0],[1516284008000,7.7],[1516287608000,7.1],[1516291208000,6.6],[1516294805000,7.8],[1516298405000,6.8],[1516302005000,7.4],[1516305605000,8.0],[1516309205000,8.2],[1516312805000,8.0],[1516316405000,8.2],[1516320003000,8.1],[1516323603000,7.8],[1516327203000,7.3],[1516333827000,7.8],[1516334403000,7.8],[1516338003000,6.6],[1516341603000,8.1],[1516345203000,8.3],[1516348803000,8.5],[1516352403000,8.5],[1516356001000,7.3],[1516359601000,7.7],[1516363201000,8.3],[1516366801000,8.4],[1516370401000,7.2],[1516374001000,8.5],[1516377611000,8.0],[1516381211000,8.3],[1516384811000,8.5],[1516388411000,8.3],[1516392011000,8.2],[1516395611000,8.1],[1516399208000,8.1],[1516402808000,8.0],[1516406408000,7.9],[1516410008000,8.2],[1516413608000,8.5],[1516417208000,8.3],[1516420806000,8.2],[1516424406000,7.7],[1516428006000,6.8],[1516431606000,8.3],[1516435206000,6.6],[1516438806000,7.9],[1516442404000,7.4],[1516446004000,6.6],[1516449604000,6.9],[1516453204000,7.4],[1516456804000,7.3],[1516460404000,7.2],[1516464002000,8.3],[1516467602000,8.2],[1516471202000,8.1],[1516474802000,8.4],[1516478402000,8.2],[1516482002000,8.1],[1516485610000,7.9],[1516489210000,7.9],[1516492810000,7.9],[1516496410000,8.4],[1516500010000,8.4],[1516503610000,8.4],[1516507208000,7.9],[1516510808000,7.9],[1516514408000,6.9],[1516518008000,8.3],[1516521608000,7.4],[1516525208000,7.4],[1516528806000,7.9],[1516532406000,8.4],[1516536006000,7.9],[1516539606000,6.5],[1516543206000,8.5],[1516546806000,8.4],[1516550404000,8.2],[1516554004000,8.2],[1516557604000,8.1],[1516561204000,8.0],[1516564804000,7.9],[1516568404000,7.9],[1516572001000,7.8],[1516575601000,7.8]
      ]
    }],
    yaxis: {
      labels: {
        minWidth: 10
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 3
      }
    },
    annotations: {
    xaxis: [{
      x: 1515909608000,
      x2: 1515974404000,
      fillColor: '#d19fef',
      opacity: 0.4,
      label: {
        borderColor: '#d19fef',
        style: {
          fontSize: '10px',
          color: '#fff',
          background: '#d19fef',
        },
        offsetY: -10,
        text: '酸鹼值異常',
      }
    }]
  }
  }

  var chartline2 = new ApexCharts(
    document.querySelector("#chart-line2"),
    optionsline2
  );

  chartline2.render();
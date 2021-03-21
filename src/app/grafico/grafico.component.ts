import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  dados: []
  @Input() cidade: string;
  @Input() data: string;

  @ViewChild("casosConfirmados", { static: true }) casosConfirmados: ElementRef;

  constructor(private service: ConfigService) {
    console.log('grafico', this.cidade, this.data)
  }

  buildGraphsz(data) {
    let casosConfirmados = [];
    let novosCasosDia = 0;
    let obitosDia = 0;
    let obitosAcumulados = 0;
    data.map(value => {
      casosConfirmados.push({
        data: [value.casosConfirmados],
        label: value.cidade,
        backgroundColor: value.color
      });

      // console.log(value)
      // novosCasosDia += value.casosDia;
      // obitosDia += value.obitosDia;
      // obitosAcumulados += value.obitosTotal;
    })
    // return [
    //   {
    //     data: [casosConfirmados],
    //     backgroundColor: '#555555',
    //     label: "Casos confirmados"
    //   },
    //   {
    //     data: [novosCasosDia],
    //     backgroundColor: '#259687',
    //     label: "Novos casos do dia"
    //   },
    //   {
    //     data: [obitosDia],
    //     backgroundColor: '#FFCC00',
    //     label: "Óbitos do dia"
    //   },
    //   {
    //     data: [obitosAcumulados],
    //     backgroundColor: '#000000',
    //     label: "Óbitos acumulados"
    //   }
    // ];
   this.buildGraphOut(casosConfirmados, this.casosConfirmados.nativeElement)


  }

  buildGraphOut(datasets, graphRef) {
    console.log(datasets, graphRef)
    new Chart(graphRef, {
      type: 'bar',
      data: {
        //labels: ["Casos confirmados, Novos casos do dia, Obitos acumulados, Obitos no dia"],
        datasets: datasets
      }
    });
  }

  buildGraphs(data) {

    let labels = [];
    let casosConfirmadosDataset = {
        label: "Casos Confirmados",
        backgroundColor: [],
        data: []
    };

    data.map(value => {

        labels.push(value.cidade);

        casosConfirmadosDataset.backgroundColor.push(value.color);
        casosConfirmadosDataset.data.push(value.casosConfirmados);

    });

    this.buildGraph([casosConfirmadosDataset], this.casosConfirmados.nativeElement, labels)

}

buildGraph(datasets, graphRef, labels) {
    console.log(datasets, graphRef)
    new Chart(graphRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets
      }
    });
  }

  ngOnInit() {

    this.service.getDados().subscribe((data) => {
      this.dados = data;
     // this.buildGraphs(data)
    })


  }

}

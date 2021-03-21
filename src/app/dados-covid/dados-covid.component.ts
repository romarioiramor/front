import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dados-covid',
  templateUrl: './dados-covid.component.html',
  styleUrls: ['./dados-covid.component.css']
})
export class DadosCovidComponent implements OnInit {

  dados: any
  public cidade: any
  public data: any



  constructor(private service: ConfigService) {
    this.dados =  {
      datas: [],
      cidades: [],
      dados: {}
    }
    this.cidade = null
    this.data = null
  }

  onChangeCidade(UpdatedValue : string) :void
  {
    this.cidade = UpdatedValue;
    this.buildGraphs(this.dados.dados[this.cidade] )
  }


  ngOnInit() {

    this.service.getDados().subscribe((data) => {
      this.dados = data

    })

  }

  filtrar() {
    console.log(this.data, this.cidade)
  }

  @ViewChild("casosConfirmados", { static: true }) casosConfirmados: ElementRef;

  buildGraphs(data) {
    console.log(data)
    let labels = [];
    let casosConfirmadosDataset = {
        label: "Casos Confirmados",
        backgroundColor: [],
        data: []

    };

    let casosDiasDataset = {
        label: "Casos Dia",
        backgroundColor: [],
        data: []
    };

    let obitosDiasDataset = {
        label: "Óbitos Dia",
        backgroundColor: [],
        data: []
    };



    data.map(value => {

        labels.push(value.data);

        casosConfirmadosDataset.backgroundColor.push('yellow');
        casosConfirmadosDataset.data.push(value.casosConfirmados);
        casosDiasDataset.backgroundColor.push('orange');
        casosDiasDataset.data.push(value.casosDia);
        obitosDiasDataset.backgroundColor.push('red');
        obitosDiasDataset.data.push(value.obitosDia);

    });

    this.buildGraph([casosConfirmadosDataset, casosDiasDataset, obitosDiasDataset], this.casosConfirmados.nativeElement, labels)

}
myChart = null
buildGraph(datasets, graphRef, labels) {
    console.log(datasets)
    if(this.myChart != null ) {
      this.myChart.destroy()
    }
    this.myChart = new Chart(graphRef, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}

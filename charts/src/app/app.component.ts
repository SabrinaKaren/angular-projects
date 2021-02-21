import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // dados comuns
  generalData = [
    ['Sul', 1826239],
    ['Centro-Oeste', 1075023],
    ['Norte', 1115704],
    ['Nordeste', 2361298],
    ['Sudeste', 3652362]
  ];
  generalColumns = ['Região', 'Porcentagem'];
  generalWidth = 700;
  generalHeight = 400;

  // pizza
  pieType = 'PieChart';
  pieTitle = '[Pizza] Casos Covid Brasil por região';
  pieOptions = {};
  pieTitle3D = '[Pizza 3D] Casos Covid Brasil por região';
  pieOptions3D = {
    is3D: true
  };

  // barras
  barType = 'BarChart';
  barTitle = '[Barras] Casos Covid Brasil por região';
  barOptions = {};

  // colunas
  columnType = 'ColumnChart';
  columnTitle = '[Colunas] Casos Covid Brasil por região';
  columnOptions = {};

  // area
  areaType = 'AreaChart';
  areaTitle = '[Área] Casos Covid Brasil por região';
  areaOptions = {};

  // tabela
  tableType = 'Table';
  tableTitle = '[Tabela] Casos Covid Brasil por região';
  tableOptions = {};

}
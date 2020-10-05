import { Component, OnInit } from '@angular/core';
import { NamedColumn, Row } from '@spppi/core';
export class CTest {
  public uuid: string;
  constructor() {
    this.uuid = 'test2';
  }

  public getUiid(): string {
    return this.uuid;
  }
}
@Component({
  selector: 'app-pages2',
  templateUrl: './pages2.component.html',
  styleUrls: ['./pages2.component.scss'],
})
export class Pages2Component implements OnInit {
  public result: string;
  public obj: CTest;
  public arr = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
  public newarr = [];

  colums: Array<NamedColumn> = [
    {
      id: `id`,
      name: `#`,
      visible: true,
      position: 0,
      width: 200,
      enabledSort: true,
      enabledFilter: true,
    },
    {
      id: 'title',
      name: `Title`,
      visible: true,
      position: 1,
      width: 50,
      enabledSort: true,
      enabledFilter: true,
    },
    {
      id: 'mark',
      name: `Mark`,
      visible: true,
      position: 2,
      width: 50,
    },
    {
      id: 'diameter',
      name: `Diameter`,
      visible: true,
      position: 3,
      width: 50,
    },
    {
      id: 'season',
      name: `Season`,
      visible: true,
      position: 4,
      width: 50,
    },
    {
      id: 'image_1',
      name: `Image`,
      visible: true,
      position: 5,
      width: 50,
    },
    {
      id: 'length',
      width: 150,
      position: 6,
      visible: true,
      name: 'length',
    },
    {
      id: 'mail',
      width: 150,
      position: 7,
      visible: true,
      name: 'mail',
      selector: 'mail.name',
    },
  ];
  rows: Array<Row> = [
    {
      id: 1,
      title: 'alex',
      mark: 'moscow',
      diameter: '17',
      season: true,
      length: '170',
      mail: { name: 'alex@me.com' },
    },
    {
      id: 2,
      title: 'john',
      mark: 'new york',
      diameter: '21',
      season: true,
      length: '200',
      mail: { name: 'john@me.com' },
    },
    {
      id: 3,
      title: 'lil pump',
      mark: 'los angeles',
      diameter: '24',
      season: false,
      length: '10',
      mail: { name: 'lilpump@me.com' },
    },
    {
      id: 4,
      title: 'pharaoh',
      mark: 'rama',
      diameter: '18',
      season: true,
      length: '20',
      mail: { name: 'pharaoh@me.com' },
    },
    {
      id: 5,
      title: 'feduk',
      mark: 'moscow',
      diameter: '27',
      season: false,
      length: '20',
      mail: { name: 'feduk@me.com' },
    },
  ];
  constructor() {}

  ngOnInit(): void {
    const aurUuid = 'test2';
    this.newarr = this.arr.splice(0);
    // this.obj = new CTest();
    // console.log(this.obj, this.obj.getUiid());
    if (this.obj == undefined || this.obj.getUiid() == aurUuid) {
      this.result = 'Действие 1';
    } else {
      this.result = 'Второе действие';
    }
  }
}

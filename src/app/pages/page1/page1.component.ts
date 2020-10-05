import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import JestWorker from 'jest-worker';
// get/set Decorator
const logSet = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(propertyKey);
  console.log(target);
  console.log(descriptor);
};

class User {
  private val: string;

  @logSet
  set values(name: string) {
    this.val = name;
  }

  get values(): string {
    return this.val;
  }

  constructor(public name: string, public age: number) {}

  public myAge(age: number) {
    this.age = age;
  }
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit, OnDestroy {
  id: number;
  product: string;
  price: string;
  testdecorator = new User('testname', 55);

  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.testdecorator.myAge(44);
    this.testdecorator.values = 'testttt';
    const ttt = this.testdecorator.values;
    console.log('ttt', ttt);
    console.log('create comp');
    this.routeSubscription = this.route.params.subscribe(
      (params) => (this.id = params['id'])
    );
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        console.log('ok suscribe');
        this.product = queryParam['product'];
        this.price = queryParam['price'];
      }
    );

    const arr = ['test', 'lamp'];
    console.log('arr', arr);
    arr.unshift('sem');
    console.log('arr', arr);
    const tt = arr.shift();
    console.log('arr', arr, tt, arr.reverse());
  }

  ngOnDestroy(): void {
    this.routeSubscription ? this.routeSubscription.unsubscribe() : undefined;
    this.querySubscription ? this.querySubscription.unsubscribe() : undefined;
  }
}

import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import "rxjs/add/operator/groupBy"
import "rxjs/add/operator/map"

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  observableText: string = 'Nice to meet you!'
  wordLabels:any[] = []
  wordData:any[] = []
  letterLabels:any[] = []
  letterData:any[] = []
  colors:any[] = [{backgroundColor: ["#e84351", "#434a54", "#3ebf9b", "#4d86dc", "#f3af37"]}]
  constructor() { }

  ngOnInit() {
    this.observe()
  }


  observe() {
    [this.wordLabels, this.wordData] = this.observeAny(this.observableText.match(/[\wа-яё]+/gmi));
    [this.letterLabels, this.letterData] = this.observeAny(this.observableText.match(/[\wа-яё]/gmi))
  }

  private observeAny(arr) {
    let labels = []
    let data = []
    Observable.from(arr)
      .groupBy((a)=>a)
      .subscribe((res)=> {
        labels.push(res.key)
        res
          .count()
          .subscribe((res)=>data.push(res))
      })

    for (let i = this.colors[0].backgroundColor.length; i < labels.length; i++) {
      this.colors[0].backgroundColor.push(this.randomColor())
    }

    return [labels, data]

  }


  private randomColor() {
    let arr = []
    for (let i=0; i<3; i++) {
      let temp = (Math.floor(Math.random()*255)).toString(16)
      temp = temp.length === 2 ? temp : temp + 'f'
      arr.push(temp)
    }
    return `#${arr.join('')}`
  }
}

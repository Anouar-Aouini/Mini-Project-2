import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
  public param: { score: number } = { score: 0 };
  public score: number = 0;
  ngOnInit(): void {
        this.param = {
      score: this.route.snapshot.params["score"]
        }
    console.log(this.param.score);
    this.score = this.param.score;
  }

}

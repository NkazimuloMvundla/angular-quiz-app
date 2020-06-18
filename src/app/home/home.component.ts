import { Component, OnInit } from "@angular/core";
import { GetDataService } from "../get-data.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private _getData: GetDataService) {}
  result: Object;
  index: number = -1;
  Question: string;
  correct_ans: string;
  answers: Object;
  value: string;
  correct_answer: number = 0;

  ngOnInit() {
    this._getData.greet().subscribe((data) => {
      const { results } = data;

      this.result = results;
      console.log(this.result.length);
    });
  }
  Questions(num: number) {
    //console.log(this.result[this.increase()].incorrect_answers);
    this.Question = this.result[num].question;

    console.log(this.index + "question");
  }

  Answer(num: number) {
    this.result[num].incorrect_answers.push(this.result[num].correct_answer);
    this.answers = this.result[num].incorrect_answers;
    console.log(this.index + "answers");
  }

  getScore(value: any) {
    this.value = value;
    this.correct_ans = this.result[this.index].correct_answer;
    console.log(
      "From val " + this.value + " " + " correct is " + this.correct_ans
    );
    if (this.value === this.correct_ans) {
      document.getElementById("correct_ans").textContent =
        "Correct , the answer is indeed " + this.correct_ans;
      this.correct_answer++;
    } else {
      document.getElementById("correct_ans").textContent =
        "Wrong , the answer is " + this.correct_ans;
    }

    if (this.index === 10) {
      document.getElementById("correct_ans").textContent =
        "You got " + this.correct_answer + " out of  10 ";
    }
  }

  alertScore(num: number) {
    if (num == 9) {
      alert(" You got " + this.correct_answer + " out of 10 ");
      window.location.reload();
    }
  }

  increase() {
    this.index = this.index + 1;
    this.Questions(this.index);
    this.Answer(this.index);
    document.getElementById("correct_ans").textContent = "";
    document.getElementById("quiz_intro").textContent = "";
    this.alertScore(this.index);
    return this.index;
  }
}

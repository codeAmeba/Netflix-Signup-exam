import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sooyoung',

  template: `
  <nav>
    <a href="#"><img class="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></a>
    <div class="login-link">
      <h2><a href="#">로그인</a></h2>
    </div>
  </nav>
  <section>
  <div class="promotion">
    <p>첫 한 달 동안 마음껏 <strong>무료로 이용하세요.</strong></p>
  </div>
  <div class="promotion-text">
    <h4>지금 가입하고 한 달 동안 무료로 이용하세요.</h4>
    <p>Netflix 가입, 복잡하지 않아요!</p>
    <p>복잡한 단계는 모두 없앴습니다.</p>
  </div>
    <form class="sign-up-form">
      <input class="email" type="text" placeholder="이메일">
      <input class="password" type="text" placeholder="비밀번호">
      <div class="accept-check">
        <input type="checkbox">
        <p>예, Netflix 특별 프로모션 알림 이메일을 보내주세요.</p>
      </div>     
      <button class="next">다음</button>
    </form>
  </section>
  <footer>
    <div class="question">
      <a href="#">질문이 있으신가요? 고객 센터에 문의하세요.</a>
    </div>
    <ul class="footer-list">
      <li><a href="#">자주 묻는 질문</a></li>
      <li><a href="#">고객 센터</a></li>
      <li><a href="#">이용 약관</a></li>
      <li><a href="#">개인정보</a></li>
      <li><a href="#">쿠키 설정</a></li>
      <li><a href="#">회사 정보</a></li>
    </ul>

  </footer>
  `,
  
  styles: [`
  nav {
    height: 80px;
    border-bottom: 1px solid #E6E6E6;
    position: relative;
  }
  .sign-up-form {

  }
  .email, .password, .next {
    display: block;
  }
  .email, .password {
    width: 430px;
    height: 60px;
    border: 1px solid #E6E6E6;
    margin: 15px auto;
    padding-left: 10px;
    font-size: 14px;
    color: #E6E6E6;
  }
  .email:focus, .password:focus {
    background-color: #E8F0FE;
    border-color: green;
  }
  .accept-check {
    text-align: center;
  }
  .accept-check input, p {
    display: inline-block;
    text-align: left;
  }
  .accept-check input {
    margin-right: 10px;
  }

  .next {
    width: 440px;
    height: 47px;
    border: none;
    color: white;
    margin: 10px auto;
    background-color: #E50A12;
  }
  footer {
    height: 250px;
    background-color: #F3F3F3;
  }
  section {
    height: 720px;
  }
  .logo {
    width: 165px;
    margin: 15px auto 15px 20px; 
  }
  .login-link {
    display: inline-block;
    position: absolute;
    right: 0;
    margin: 35px 20px 35px 0;
  }
  .promotion {
    background-color: #0070EB;
    color: white;
    width: 440px;
    height: 60px;
    text-align: center;
    margin: 20px auto 45px auto;
  }
  .promotion p {
    padding-top: 23px;
  }
  .promotion-text {
    text-align: center;
  }
  .promotion-text h4 {
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 15px;
  }
  .promotion-text p {
    font-size: 20px;
    font-weight: 400;
    padding-bottom: 5px;
    display: block;
    text-align: center;
  }
  .question {
    margin-left: 40px;
    padding-top: 40px;
  }
  .footer-list {
    padding-top: 30px;
    margin-left: 40px;
  }
  `]
})
export class SooyoungComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// 이메일: 5~50자, 이메일 형식
// 비밀번호: 4~60자
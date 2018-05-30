import { Component, OnInit,ElementRef,ViewChild,Input,AfterViewInit,OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  @ViewChild('myCanvas') canvasRef: ElementRef;
  
  gridCube:string[60];
  spinStyle='spin45 2s linear infinite';
  private subscription:Subscription;
  private timer;
  angles=0;
  cycle=0;
  content:string[];
  heading:string;
  comments:Comments[];
  i=0;
  j=0;
  com1:string;
  com2:string;
  name1:string;
  name2:string;
  marginLeft : object;

  /*
  comments=['"1 I am preparing for entrance exams.Great experience over here."  --rahul',
            '"2 I am preparing for entrance exams.Great experience over here."  --ravi',
            '"3 I am preparing for entrance exams.Great experience over here."  --ram',
            '"1 I am preparing for placements .Amazing experience over here."  --axul',
            '"2 I am preparing for placements .Amazing experience over here." --soorya',
            '"3 I am preparing for placements .Amazing experience over here."  --capeta'];
  */
  

  constructor(private authService:AuthService) { }

  //@Input() public width = 400;
  //@Input() public height = 400;
 
  ngOnInit() {
    let temp = Math.floor(window.innerWidth * 14/100) +'px';
    console.log(temp);
    this.marginLeft= {
    'margin-left':temp 
    };

    /*
    $('nav a').on('click', function() {
      console.log('working...');    
    });
    
    $('nav a').on('click', function() {
      $('nav a').removeClass('active');
      
            var scrollAnchor = $(this).attr('data-scroll');
            if(scrollAnchor!==undefined) {
              var  scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top -100;
              $('body,html').animate({
                  scrollTop: scrollPoint
              }, 500); 
              $('nav a').addClass('active');     
            }
            return false;
        
        });
      
        $(window).scroll(function() {

          var windscroll = $(window).scrollTop();
          if (windscroll >= 100) {
              $('nav').addClass('fixed');
              $('.wrapper .section').each(function(i) {
                  if ($(this).position().top <= windscroll - 20) {
                      $('nav li.active').removeClass('active');
                      $('nav li').eq(i).addClass('active');
                  }
              });
      
          } else { 
              //$('#1').stop().fadeOut();
              $('nav').removeClass('fixed');
              $('nav li.active').removeClass('active');
              $('nav li:first').addClass('active');
          }
          /*
          if(windscroll>=1000) {
            $('.navbar-nav li a').css('color', 'black');
            //$('.navbar-nav li a:hover').css('color', 'white');
            $('.navbar-nav li a').hover(function(){
              $(this).css("color", "white");
              }, function(){
              $(this).css("color", "black");
          });
          }
          else {
            //$('.navbar').css('background', 'rgba(0, 0, 0, 0.5)');
            //$('nav li.active').css();
          }
      
        }).scroll();      
        */

        $(document).ready(function() {
          
          var scrollLink = $('.scroll');
          
          // Smooth scrolling
          scrollLink.click(function(e) {
            e.preventDefault();
            $('body,html').animate({
              scrollTop: $(this.hash).offset().top
            }, 1000 );

            //$(this).addClass('animated fadeInUp');
            console.log('clicked...');
          });
          
          // Active link switching
          $(window).scroll(function() {
            var scrollbarLocation = $(this).scrollTop();
            
            scrollLink.each(function() {
              
              var sectionOffset = $(this.hash).offset().top - 60;
              
              console.log("1:"+sectionOffset+"2:"+scrollbarLocation);

              if(scrollbarLocation >= 250) {
                $('.navbar').css('background','grey');
                /*$('.navbar-nav > li > a').css('color','white');
                $('.navbar-nav > li > a').hover(
                  function() {
                    $(this).css('color','blue');
                  },
                  function() {
                    $(this).css('color','white');
                  }
            );*/
                $('.navbar-nav').find('li.active').css('font-size','30px');
                $('.navbar-header > a').css('color','white');
              }
              else {
                $('.navbar').css('background','white');
                /*$('.navbar-nav > li > a').css('color','black');
                $('.navbar-nav > li > a').hover(
                  function() {
                    $(this).css('color','blue');
                  },
                  function() {
                    $(this).css('color','black');
                  }
                );*/
                $('.navbar-nav').find('li.active').css('color','blue');
                $('.navbar-header > a').css('color','black');
              }
              /*
              if ( sectionOffset <= scrollbarLocation ) {
                $(this.hash).hide();
                $(this.hash).show().addClass('animated fadeInUp');
                $(this.hash).siblings().removeClass('animated fadeInUp');
              }*/
              
              if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
              }
            })
            
          })
          
        });
}

  
  ngOnDestroy() {
  }

  



  /*
  ngAfterViewInit() {
    
    let ctx: CanvasRenderingContext2D =
    this.canvasRef.nativeElement.getContext('2d');
    this.canvasRef.nativeElement.width=window.innerWidth;
    this.canvasRef.nativeElement.height=window.innerHeight;
    console.log(this.canvasRef);
    animate();
    var x=0,y=200,radius=30,dx=2,dy=2,flag=0;
    var x1,y1=y,x2,y2=y,x3,y3=y;
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
       
        ctx.beginPath();
        ctx.moveTo(200,600);
        //ctx.lineTo(190,550);
        ctx.lineTo(220,550);
        ctx.lineTo(230,530);
        ctx.lineTo(210,600);
        ctx.lineTo(200,600);
        ctx.stroke();
        //ctx.fill();
        if(x<700 && flag==0) {
          ctx.beginPath();
          ctx.arc(x,200,radius,0,Math.PI*2,false);
          ctx.strokeStyle="black";
          ctx.fillStyle="black";
          ctx.stroke();
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x-100,200,radius,0,Math.PI*2,false);
          ctx.strokeStyle="black";
          ctx.fillStyle="black";
          ctx.stroke();
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(x-200,200,radius,0,Math.PI*2,false);
          ctx.strokeStyle="black";
          ctx.fillStyle="black";
          ctx.stroke();
          ctx.fill();
        }
        else {
          x1=x;
          y1=y;
          ctx.beginPath();
          ctx.arc(x1,y1,radius,0,Math.PI*2,false);
          ctx.strokeStyle="blue";
          ctx.fillStyle="blue";
          ctx.stroke();
          ctx.fill();

          ctx.beginPath();
          x2=x-100;
          y2=y-100;
          ctx.arc(x2,-y2,radius,0,Math.PI*2,false);
          ctx.strokeStyle="grey";
          ctx.fillStyle="grey";
          ctx.stroke();
          ctx.fill();
          
          ctx.beginPath();
          x3=x-200;
          y3=y-50;
          ctx.arc(x3,y3,radius,0,Math.PI*2,false);
          ctx.strokeStyle="green";
          ctx.fillStyle="green";
          ctx.stroke();
          ctx.fill();

          if(x1 + radius >= window.innerWidth || x1-radius < 0 ||
              x2 + radius >= window.innerWidth || x2-radius < 0 ||
              x3 + radius >= window.innerWidth || x3-radius < 0) {
            dx=-dx;
            //split();
            flag++;
          }
          if(y1 + radius >= window.innerHeight || y1-radius < 0 ||
              y2 + radius >= window.innerHeight || y2-radius < 0 ||
              y3 + radius >= window.innerHeight || y3-radius < 0) {
            dy=-dy;
            //split();
            flag++;
          }
          y+=dy;
        }
        x+=dx;
        if(flag>0) {
          y+=dy;
        }
        /*
        if(flag==1) {
          y1=Math.random() * window.innerHeight;
          y2=(Math.random() - 0.5) * window.innerHeight;
          y3=(Math.random() - 0.3) * window.innerHeight;
        }*/
        /*
        if(flag==1) {
          x=Math.random() * innerWidth;
          y=Math.random() * innerHeight;
          dx=(Math.random() - 0.5) * 8;
          dy=(Math.random() - 0.5) * 8;
        }*/
   // }
/*
    function split() {
      
      var xx=Math.random() * innerWidth;
      var yy=Math.random() * innerHeight;
      var dxx=(Math.random() - 0.5) * 8;
      var dyy=(Math.random() - 0.5) * 8;
      var xx=500,yy=800;
      ctx.beginPath();
      ctx.arc(xx+x,yy,radius-20,0,Math.PI*2,false);
      ctx.strokeStyle="blue";
      ctx.fillStyle="green";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(xx+x,yy,radius-20,0,Math.PI*2,false);
      ctx.strokeStyle="grey";
      ctx.fillStyle="green";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(xx+x,yy,radius-20,0,Math.PI*2,false);
      ctx.strokeStyle="green";
      ctx.fillStyle="green";
      ctx.stroke();
    }*/
    //ctx.fillRect(100,100,100,100);
    /*let x2=-30,y2=250;
    for(let i=0;i<5;i++) {
      ctx.beginPath();
      ctx.arc(100,y2,30,0,Math.PI*2,false);
      ctx.strokeStyle="red";
      ctx.fillStyle="green";
      ctx.stroke();  
      //animate();*/
    //}
    



    /*

<h1>Choose your category</h1>
<div class="container">
    <div class="row">
      <!-- Carousel -->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

        <a href="#carousel-example-generic" data-slide-to="0">
            <i class="fa fa-paper-plane" style="font-weight:10px;color:red;"></i>
        </a>
        <a href="#carousel-example-generic" data-slide-to="1">
            <i class="fa fa-paper-plane" style="font-weight:10px;color:green;"></i>
        </a>
        <a href="#carousel-example-generic" data-slide-to="2">
            <i class="fa fa-paper-plane" style="font-weight:10px;color:blue;"></i>
        </a>
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <div class="carousel-indicators">
          <!--
            <a href="#carousel-example-generic" data-target="#carousel-example-generic" data-slide-to="0">
                <i class="fa fa-paper-plane" style="font-weight:10px;color:red;"></i>
            </a>
            <a href="#carousel-example-generic" data-target="#carousel-example-generic" data-slide-to="1">
                <i class="fa fa-paper-plane" style="font-weight:10px;color:green;"></i>
            </a>
            <a href="#carousel-example-generic" data-target="#carousel-example-generic" data-slide-to="2">
                <i class="fa fa-paper-plane" style="font-weight:10px;color:blue;"></i>
            </a>-->
        </div>
        <!-- Wrapper for slides -->


        <div class="carousel-inner">
            <div class="item active">
              <div class="header-text hidden-xs">
                  <div class="row text-center">
                      <a class="col-xs-4 col-md-4 icons">
                        <img src="\assets\\interview.png" alt="interview">
                      </a>
                      <h3 class="col-xs-8 col-md-8">
                        <span><strong>Students doing professional courses</strong></span>
                        <ul>
                          <li>Are you preparing for college placements ? </li>
                          <li>Are you tired of boring classes ?</li>
                          <li>Are you looking for some beginner learning content ?</li>
                        </ul>
                      </h3>
                  </div>
                </div>
            </div>
            <div class="item">
              <div class="header-text hidden-xs">
                <div class="row text-center">
                    <h3 class="col-xs-8 col-md-8">
                        <span><strong>Students preparing for competitive exams</strong></span>
                        <ul>
                            <li>Are you preparing for any bank or other goverment exams ? </li>
                            <li>Are you a school student attempting entrance exams ?</li>
                            <li>Are you looking for some beginner learning content ?</li>
                        </ul>
                    </h3>
                    <a class="col-xs-4 col-md-4 icons">
                      <i class="fa fa-edit" style="font-size:100px"></i>
                    </a>
                 </div>
              </div>
            </div>
            <div class="item">
              <div class="header-text hidden-xs">
                <div class="row text-center">
                    <a class="col-xs-4 col-md-4 icons">
                      <img src="\assets\\faculty.png">
                    </a>
                    <h3 class="col-xs-8 col-md-8">
                        <span><strong>Faculty seeking difference in teaching</strong></span>
                        <ul>
                            <li>Are your students tired of conventional learning ? </li>
                            <li>Do your teaching habits bore you ?</li>
                            <li>Do you require any creative medium to teach and test ?</li>
                        </ul>
                    </h3>
                 </div>
              </div>
            </div>
        </div>
        <!-- Controls -->
        <a class="left" href="#carousel-example-generic" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a class="right" href="#carousel-example-generic" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
        </a>
      </div><!-- /carousel -->
    </div>
  </div>
  <br><br><br>
<h3>
<div class="board"><div class="bolt">.</div>
  <div class="board_text">EXPERIENCE CORNER</div>
  <div class="bolt1">.</div>
</div>
</h3>
<br>
<div class="frame1">
  <div class="frame2">
    <div class="frame3">
        <div class="row">
          <div class="col-xs-10 col-md-3 card">
            <img src="\assets\\pin1.png" alt="img1" class="pin">
            <h4 class="comments">{{com1}}</h4><br>
            <h3 class="names" style="float:right">--{{name1}}</h3>
          </div>
          <div class="col-xs-10 col-md-3 card">
            <img src="\assets\\pin2.png" alt="img2" class="pin">
            <h4 class="comments">"Good luck !"</h4>
          </div>
          <div class="col-xs-10 col-md-3 card">
              <img src="\assets\\pin1.png" alt="img2" class="pin">
              <h4 class="comments">"Wow!!!!"</h4>
          </div>
        </div>


        <div class="row row2">
            <div class="col-xs-10 col-md-3 card">
              <img src="\assets\\pin2.png" alt="img1" class="pin">
              <h4 class="comments">"Hurray !!!"</h4>
            </div>
            <div class="col-xs-10 col-md-3 card">
              <img src="\assets\\pin2.png" alt="img2" class="pin">
              <!--
              <h4 class="comments">"I am preparing for placements .Amazing experience over here"<br>
              raol
              </h4>-->
              <h4 class="comments">{{com2}}</h4><br>
              <h3 class="names" style="float:right">--{{name2}}</h3>
            </div>
            <div class="col-xs-10 col-md-3 card">
                <img src="\assets\\pin1.png" alt="img2" class="pin">
                <h4 class="comments">"Bon voyage"</h4>
          </div>
    </div>
  </div>
</div>
</div>
<!--
<br><br><br><br><br>
<br><br><br><br><br>
<br><br><br><br><br>-->

<br><br><br><br><br>
<br><br><br><br><br>
<br><br><br><br><br>
<div class="row cmpBg">
<div class="col1 col-xs-12 col-md-6">
  <div class="spinner">
  <div class="knob1"></div>
    <div class="spinner_inner">
      <div class="dir">
        <div class="dir1"><h4>|</h4></div><h4 class="text1">N</h4>
        <div class="dir2"><h4>|</h4></div><h4 class="text2">E</h4>
        <div class="dir3"><h4>|</h4></div><h4 class="text3">S</h4>
        <div class="dir4"><h4>|</h4></div><h4 class="text4">W</h4>
      </div>

      <div class="links">
        <div class="link1"><h4>|</h4></div><h6 class="text5">Gen. apts</h6>
        <div class="link2"><h4>|</h4></div><h6 class="text6">Logic</h6>
        <div class="link3"><h4>|</h4></div><h6 class="text7">Tech. apts</h6>
        <div class="link4"><h4>|</h4></div><h6 class="text8">தமிழ்</h6>
      </div>

      <div class="spinner_in"><h1 [ngStyle]="changeStyle()"><></h1></div>
      <div class="spinner_3">
        <h1 class="needle1">></h1><h1 class="needle2"><</h1>
        <h1 class="needle3">></h1><h1 class="needle4"><</h1>
      </div>
      <div class="spinner_4"></div>
    </div>
</div>
</div>

<div class="col2 col-xs-12 col-md-6">
  <h2>{{heading}}</h2>
  <ul *ngFor="let item of content">
    <li><h3>{{item}}</h3></li>
  </ul>
</div>
</div>
*/
  
}

interface Comments {
  email:string,
  name:string,
  comment:string
}



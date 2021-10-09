// pages/singleGame/singleGame.js
var clickTime=0;// 单机次数
var numclickTime=0; 
var currentPlayerNum;
var playerNum=0;
var num;
var numSure=0;

Page({
        data: {
            resultList:[0, 0, 0, 0, 0, 0, 0], //开始游戏后骰子的结果，resultlist[0]代表点数为1的有几个
            displayList:[6], //存放结果图片
            rank:"", //骰子判定的结果
            dices:[
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/rowing_dices.gif",
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/1.png",
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/2.png",
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/3.png",
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/4.png",
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/5.png",
                "cloud://cloud1-0gayfwqf077f607a.636c-cloud1-0gayfwqf077f607a-1307730680/6.png"
            ], //存储图片路径
            animation:"", //gif
            buttonText:"摇起来",
            isBobingOver:false,
            currentNum:0,
            isNumshow:true,
            nextButton:"",
            
        },
    
        
            startClick(){ 
                
                clickTime %= 2;
                clickTime ++ ;
                if(clickTime%2 == 1){                
                    this.setData({
                        buttonText: "开起来",
                        animation:this.data.dices[0],
                        bowlPicture:"",
                    })
                }else { //结算游戏
                    
                    console.log(this.data.currentNum);  
                    this.showRank();
                    this.setData({
                        isBobingOver:true,
                        buttonText:"摇起来",
                        animation:"",
                        bowlPicture:"/static/image/bobingPic.png",
                        resultList:[0, 0, 0, 0, 0, 0, 0],
                       
                    })
                    
                }  
            },
            
            randomList(){
                var tempList=[];
                for(var i=0; i<6; i++){
                    var num = Math.floor(Math.random() * 6) + 1; // 随机数区间为1-6
                    this.data.resultList[num]++;
                    switch(num){
                        case 1:
                            tempList.push(this.data.dices[1]);
                            break;
                        case 2:
                            tempList.push(this.data.dices[2]);
                            break;  
                        case 3:
                            tempList.push(this.data.dices[3]);
                            break;       
                        case 4:
                            tempList.push(this.data.dices[4]);
                            break; 
                        case 5:
                            tempList.push(this.data.dices[5]);
                            break; 
                        case 6:
                            tempList.push(this.data.dices[6]);
                            break; 
                    }
                }
                this.setData({
                    displayList:tempList
                })
            },

            showRank(){
                this.randomList();
                if(this.data.resultList[4] == 3 && this.data.resultList[2] == 2){
                    this.setData({
                        rank:"状元：状元插金花"
                    })
                }
                else if(this.data.resultList[4] == 6){
                    this.setData({
                        rank:"状元：六杯红"
                    })
                }
                else if(this.data.resultList[1] == 6){
                    this.setData({
                        rank:"状元：遍地棉"
                    })
                }
                else if(this.data.resultList[4] == 5){
                    this.setData({
                        rank:"状元：五红"
                    })
                }
                else if(this.data.resultList[2] == 5){
                    this.setData({
                        rank:"状元：五子连科"
                    })
                }
                else if(this.data.resultList[4]==4){
                    this.setData({
                        rank:"状元：四红"
                    })
                }
                else if(this.data.resultList[1]==1 && this.data.resultList[2]==1
                    &&this.data.resultList[3]==1 && this.data.resultList[4]==1
                    &&this.data.resultList[5]==1 && this.data.resultList[6]==1){
                        this.setData({
                            rank:"榜眼：对堂"
                        })
                    }
                else if(this.data.resultList[4] == 3){
                    this.setData({
                        rank:"探花：三红"
                    })
                }    
                else if(this.data.resultList[2] == 4){
                    this.setData({
                        rank:"进士：四进"
                    })
                }
                else if(this.data.resultList[4] == 2){
                    this.setData({
                        rank:"举人：二举"
                    })
                }
                else if(this.data.resultList[4]==1){
                    this.setData({
                        rank:"秀才：一秀"
                    })
                }
                else{
                    this.setData({
                        rank:"下次加油哦"
                    })
                }
                console.log(this.data.rank);
                console.log(this.data.resultList);
                
            },

            continueClick(){
                 this.setData({
                     isBobingOver:false,
                     currentNum: --this.data.currentNum
                })      
            },

            newClick(){ 
                this.setData({
                     isBobingOver:false,
                     currentNum:playerNum
                })
                     
            },

            returnBack(){
                wx.reLaunch({
                    url: '/pages/index/main_index',
                  })
            },
            toRule(){
                wx.navigateTo({
                  url: '/pages/Rule/Rule',
                })
              },
              toServer(){
                wx.navigateTo({
                  url: '/pages/Server/Server',
                })
              },

              numClick(){ 
                numclickTime ++ ;
                if(numclickTime<=2 ){                
                    this.setData({
                        isNumshow : true
                       }) ;
                }else {
                    this.setData({
                        isNumshow : false
                       }) ;
                }
                    
                },  

                  bindKeyInput:function(e) {
                    num = e.detail.value;
                    playerNum=num;
                    console.log(playerNum);
                  },
                  numSure(){ 
                    numSure ++ ;
                    if(numSure>=1 ){                
                       this.setData({
                        isNumshow : false
                       }) ;
                       this.setData({
                       currentNum : playerNum
                       }) ;
                    }else {
                        this.setData({
                            isNumshow : true
                           }) ;
                    }
                        
                    },
                    tosingleGame(){
                      wx.navigateTo({
                        url: '/pages/singleGame/singleGame',
                      })
                    }
                })
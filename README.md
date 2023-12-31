//needs massive work


document.body.addEventListener('keydown', (e)=>{
    if(e.key === "ArrowUp") {
        tp[0].y-=10;
        const newP = {...p};
        d = 0;//upward
        for(let i = 1; i <= l.b; i++) {
            if (d===0) {
                //upward
                if (tp[i].x === tp[i-1].x) {
                    //upward
                    d=0;
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y-10;
                } else if (tp[i].y === tp[i-1].y) {
                    if (tp[i].x < tp[i-1].x) {
                        //toRight
                        d=1;
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        //toLeft
                        d=3;
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===1) {
                //toRight
                if (tp[i].x === tp[i-1].x) {
                    if(tp[i].y < tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=1;//toRight
                    tp[i].x = tp[i-1].x + 10;
                    tp[i].y = tp[i-1].y;
                    //no such thing as the following pixel going left
                }
            } else if (d===2) {
                //downward
                if(tp[i].x === tp[i-1].x) {
                    d=2;//downward
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y + 10;
                } else if (tp[i].y === tp[i-1].y) {
                    if(tp[i].x < tp[i-1].x) {
                        d=1;//toRight
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        d=3;//toLeft
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===3) {
                //toLeft
                if (tp[i].x === tp[i-1].x) {
                    if (tp[i].y < tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=3;//toLeft
                    tp[i].x = tp[i-1].x - 10;
                    tp[i].y = tp[i-1].y;
                }
            }
        }
    } else if (e.key === "ArrowDown") {
        tp[0].y+=10;
        const newP = {...p};
        d = 2;//downward
        for(let i = 1; i <= l.b; i++) {
            if (d===0) {
                //upward
                if (tp[i].x === tp[i-1].x) {
                    //upward
                    d=0;
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y - 10;
                } else if (tp[i].y === tp[i-1].y) {
                    if (tp[i].x < tp[i-1].x) {
                        //toRight
                        d=1;
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        //toLeft
                        d=3;
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===1) {
                //toRight
                if (tp[i].x === tp[i-1].x) {
                    if(tp[i].y < tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=1;//toRight
                    tp[i].x = tp[i-1].x + 10;
                    tp[i].y = tp[i-1].y;
                    //no such thing as the following pixel going left
                }
            } else if (d===2) {
                //downward
                if(tp[i].x === tp[i-1].x) {
                    d=2;//downward
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y + 10;
                } else if (tp[i].y === tp[i-1].y) {
                    if(tp[i].x < tp[i-1].x) {
                        d=1;//toRight
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        d=3;//toLeft
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===3) {
                //toLeft
                if (tp[i].x === tp[i-1].x) {
                    if (tp[i].y < tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=3;//toLeft
                    tp[i].x = tp[i-1].x - 10;
                    tp[i].y = tp[i-1].y;
                }
            }
        }
    } else if (e.key === "ArrowLeft") {
        tp[0].x-=10;
        const newP = {...p};
        d = 3;//toLeft
        for(let i = 1; i <= l.b; i++) {
            if (d===0) {
                //upward
                if (tp[i].x === tp[i-1].x) {
                    //upward
                    d=0;
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y-10;
                } else if (tp[i].y === tp[i-1].y) {
                    if (tp[i].x < tp[i-1].x) {
                        //toRight
                        d=1;
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        //toLeft
                        d=3;
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===1) {
                //toRight
                if (tp[i].x === tp[i-1].x) {
                    if(tp[i].y < tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=1;//toRight
                    tp[i].x = tp[i-1].x + 10;
                    tp[i].y = tp[i-1].y;
                    //no such thing as the following pixel going left
                }
            } else if (d===2) {
                //downward
                if(tp[i].x === tp[i-1].x) {
                    d=2;//downward
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y + 10;
                } else if (tp[i].y === tp[i-1].y) {
                    if(tp[i].x < tp[i-1].x) {
                        d=1;//toRight
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        d=3;//toLeft
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===3) {
                //toLeft
                if (tp[i].x === tp[i-1].x) {
                    if (tp[i].y < tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=3;//toLeft
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y;
                }
            }
        }
    } else if (e.key === "ArrowRight") {
        tp[0].x+=10;
        //update the first pixel!!!! NAHHHH
        const newP = {...p};
        d = 1;//toRight
        for(let i = 1; i <= l.b; i++) {
            if (d===0) {
                //upward
                if (tp[i].x === tp[i-1].x) {
                    //upward
                    d=0;
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y-10;
                } else if (tp[i].y === tp[i-1].y) {
                    if (tp[i].x < tp[i-1].x) {
                        //toRight
                        d=1;
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        //toLeft
                        d=3;
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===1) {
                //toRight
                if (tp[i].x === tp[i-1].x) {
                    if(tp[i].y < tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=1;//toRight
                    tp[i].x = tp[i-1].x+10;
                    tp[i].y = tp[i-1].y;
                    //no such thing as the following pixel going left
                }
            } else if (d===2) {
                //downward
                if(tp[i].x === tp[i-1].x) {
                    d=2;//downward
                    tp[i].x = tp[i-1].x;
                    tp[i].y = tp[i-1].y + 10;
                } else if (tp[i].y === tp[i-1].y) {
                    if(tp[i].x < tp[i-1].x) {
                        d=1;//toRight
                        tp[i].x = tp[i-1].x + 10;
                        tp[i].y = tp[i-1].y;
                    } else if (tp[i].x > tp[i-1].x) {
                        d=3;//toLeft
                        tp[i].x = tp[i-1].x - 10;
                        tp[i].y = tp[i-1].y;
                    }
                }
            } else if (d===3) {
                //toLeft
                if (tp[i].x === tp[i-1].x) {
                    if (tp[i].y < tp[i-1].y) {
                        d=2;//downward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y + 10;
                    } else if (tp[i].y > tp[i-1].y) {
                        d=0;//upward
                        tp[i].x = tp[i-1].x;
                        tp[i].y = tp[i-1].y - 10;
                    }
                } else if (tp[i].y === tp[i-1].y) {
                    d=3;//toLeft
                    tp[i].x = tp[i-1].x - 10;
                    tp[i].y = tp[i-1].y;
                }
            }
        }
    }
    

    context.clearRect(0,0,640,480);

    for(let i = 0; i <= l.b; i++) {
        console.log(i + " : " + tp[i].x,tp[i].y);
        context.strokeRect(tp[i].x,tp[i].y,10,10);
    }
    
    context.strokeRect(tp[0].x,tp[0].y,10,10);
    check(tp[0].x,tp[0].y);
});

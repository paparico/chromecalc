function keybClicked(e) {
    
    }

function add(e) {}
function mult(e) {}
function divide() {}
function result() {}

k10=[
    [{face:'7',func:number},{face:'8',func:number},{face:'9',func:number}],
    [{face:'4',func:number},{face:'5',func:number},{face:'6',func:number}],
    [{face:'1',func:number},{face:'2',func:number},{face:'3',func:number}],
    [{face:'+/-',func:chgSign},{face:'0',func:number},{face:'.',func:decPoint}]
    ]


basefunc=[
    [{face:"+",func:add,sign:1},{face:"-",func:add,sign:-1}],    
    [{face:"x",func:mult},{face:":",func:divide}],
    [{face:"=",func:result}]    
    ]
    
function number(e) {
    console.log(this.face)
    }


function decPoint(e) {
    console.log('.')
    }


function chgSign(e) {
    console.log('ww')
    }



function mkKeyb(data) {
    var keyb=document.createElement('div')
    keyb.classList.add('keyb')
    for (var i in data) {
        var row=document.createElement('div')
        row.classList.add('row')
        keyb.appendChild(row)
        for (var j in data[i]) {
            var key=document.createElement('span')
            row.appendChild(key)
            key.innerHTML=data[i][j].face
            key.onclick =data[i][j].func.bind(data[i][j])
            }
        }
    return keyb
    }

window.onload = function () {
    kzone.appendChild(mkKeyb(k10))
    kzone.appendChild(mkKeyb(basefunc))
    kzone.children[0].id='num'
    kzone.children[1].id='func'
    }

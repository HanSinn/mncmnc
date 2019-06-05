
export function loginSuccess(lists,id){
    return{
        type:'LOGIN_SUCCESS',
        lists,
        id
    }
}

export function loginFailed(){
    return{
        type:'LOGIN_FAILED'
    }
}

export function listSuccess(suhumLists){
    return{
        type:'LIST_SUCCESS',
        suhumLists
    }
}

export function listFailed(){
    return{
        type:'LIST_FAILED',
    }
}


export  function list(data){
    if(data.types == 'login'){
        return async dispatch => {
            const res = await fetch('http://192.168.0.63:8080/actionMobileLogin.do',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "id":data.id,
                    "password":data.password
                }) 
            })
            if(res.status < 300){
                try{
                    const responseJSON = await res.json();
                    await dispatch(loginSuccess(responseJSON,data.id));
                }catch{
                    await dispatch(loginFailed());
                }
            }else{
                await dispatch(loginFailed());
            }
        }
    }else if(data.types == 'list'){
        return async dispatch => {
            const res = await fetch('http://192.168.0.63:8080/sportSuhumList.do',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    "id":data.id,
                    "sport_cd":data.code
                }) 
            })
            if(res.status < 300){
                try{
                    const responseJSON = await res.json();
                    await dispatch(listSuccess(responseJSON));
                }catch{
                    await dispatch(listFailed(responseJSON));
                }
            }else{
                const responseJSON = await res.json();
                await dispatch(listFailed(responseJSON));
            }
        }
    }

}

  
export function confirm(){
    return {
        
    }
}
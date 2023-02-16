import React from 'react'
import {nanoid} from 'nanoid'

export default function List(props) {
    return (
        <div className='row'>
            {
                props.first? '歡迎使用，輸入關鍵字，點選搜尋':
                props.isLoading ? '數據載入中' :
                props.err===''? 
                props.data.map(i => {
                    return (
                        <div className="col-md-6 col-xl-4 p-2" key={nanoid()}>
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-title w-100" src={i.avatar_url} alt='圖片'></img>
                                    <p className="card-text">{i.login}</p>
                                    <a href={i.html_url} className="btn btn-primary">連結</a>
                                </div>
                            </div>
                        </div>

                    )
                })
                :<h2 style={{color:'red'}}>{props.err}</h2>
            }
        </div>
    )
}

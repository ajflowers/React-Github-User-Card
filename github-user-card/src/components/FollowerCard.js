import React from 'react'

export default function FollowerCard(props) {
    return(
        <div className="card">
            <div className="card-flex">
                <img src={props.follower.avatar_url} />
                <div className="card-info">
                    <p className="username">{props.follower.login}</p>
                    <p>Profile:  
                    <a href={props.follower.html_url}>{props.follower.html_url}</a>
                    </p>
                </div>
            </div>
        </div>
    )

}
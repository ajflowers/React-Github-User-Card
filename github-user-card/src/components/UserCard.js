import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowerCard'

class UserCard extends React.Component {
    constructor() {
        super()
        this.state = {
            followerData: []
        }
    }

    componentDidMount() {
        axios.get(this.props.user.followers_url)
        .then(res => this.setState({ followerData: res.data}))
        .then(() => console.log(this.state.followerData))
        .catch(err => console.log(err))
    }


    render() {
        return(
            <div className="card">
                <div className="card-flex">
                    <img src={this.props.user.avatar_url} alt=""/>
                    <div className="card-info">
                        <h3 className="name">{this.props.user.name}</h3>
                        <p className="username">{this.props.user.login}</p>
                        <p>Location: {this.props.user.location}</p>
                        <p>Profile:  
                        <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
                        </p>
                        <p>Followers: {this.props.user.followers}</p>
                        <p>Following: {this.props.user.following}</p>
                        <p>Bio: {this.props.user.bio}</p>
                    </div>
                </div>
                {this.state.followerData.map(follower => (
                    <FollowerCard 
                        follower={follower}
                        key={follower.id}
                    />
                ))}                
                
            </div>
        )
    }
}

export default UserCard
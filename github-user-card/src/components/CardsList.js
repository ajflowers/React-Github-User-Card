import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'

class CardsList extends React.Component {
    state = {
        userName: 'ajflowers',
        userData: [],        
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(res => this.setState({ userData: [res.data]}))
        .then(() => console.log(this.state.userData))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div className="cards">
                {this.state.userData.map(user => (
                    <UserCard 
                        user={user}
                        key={user.login}
                    />
                ))}                
            </div>
        )
    }


}

export default CardsList
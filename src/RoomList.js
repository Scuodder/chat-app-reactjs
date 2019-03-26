import React from 'react' ;

class RoomList extends React.Component{
    render() {
        // console.log(this.props.rooms)

        const sortedRooms = [...this.props.rooms].sort((a,b) => a.id - b.id ) 
        return (
            <div className="rooms-list">
            <h3>ROOMS</h3>
            <ul>
                {sortedRooms.map((room) => {
                    const active = this.props.roomId === room.id ? " active" : ""
                    return (
                        <li key={room.id} className={"room" + active}>
                            <a 
                                href="#" 
                                onClick = { () => {this.props.subscribeToRoom(room.id)} }
                            >
                            # {room.name} </a>
                        </li>
                    )
                })}
            </ul>
                
            
            </div>
        )
    }
}

export default RoomList ;
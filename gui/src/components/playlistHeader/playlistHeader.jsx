import React, { Component } from "react"
import "./playlistHeader.css"

class PlaylistHeader extends Component {
    render() {
        return (
            <nav>
                <ul className="navbar">
                    <li> <a href='#'> Página inicial </a> </li>
                    <li>  <a href='#'> REACT </a> </li>
                    <li> <a href='#'> TESTE </a> </li>
                </ul>
            </nav>
        )
    }
}

export default PlaylistHeader
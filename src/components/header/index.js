import React from 'react'

import Avatar from './../Avatar'
import Thumb from './../Thumb'

function Header() {
    return (
        <Avatar>
        <Thumb style={{"float":"right"}} className="mr-2" src="https://picsum.photos/200/300" />

        </Avatar>
    )
}

export default Header

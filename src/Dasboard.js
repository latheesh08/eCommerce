import React from 'react' 
import { ListGroup } from 'react-bootstrap'

export default class Login extends React.Component {


    render(){
        return(
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
              <ListGroup.Item action  href="#link3">
                This one is a button
              </ListGroup.Item>
            </ListGroup>

        )
    }
}
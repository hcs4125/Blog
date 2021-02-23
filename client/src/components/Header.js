import React from 'react'
import {Row,Col} from "reactstrap"

const Header = () =>{
    return (
        <div id="page-header" className="mb-3">
            <Row>
                <Col md="6" sm="auto" className="text-center m-auto">
                    <h1>Read Our Blog</h1>
                    <h2>브리도의 개발일지입니다.</h2>
                </Col>
            </Row>
        </div>
    )
}
export default Header;
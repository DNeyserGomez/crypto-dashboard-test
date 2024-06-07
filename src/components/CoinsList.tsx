import Cards from "./Cards";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import useCoinsList from '../hooks/useCoinsList'

export default function CoinsList() { 
    var coinList = useCoinsList();
    console.log(coinList);
    return(
        <>
            <Row className="mt-5" style={{justifyContent: 'space-between !important'}}>
                <Col>
                <Cards></Cards>
                </Col>
                <Col>
                <Cards></Cards>
                </Col>
                <Col>
                <Cards></Cards>
                </Col>
            </Row>
            <Table hover className="mt-5">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>Change</th>
                    <th>Market cap</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@sasas</td>

                    </tr>
                </tbody>
            </Table>
        </>
    )
}
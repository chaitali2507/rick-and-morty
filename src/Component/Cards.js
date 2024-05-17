import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cards =({results  })=>{
    let display;
    console.log(results);
    
    if(results){
        display = results.map((x)=>{
            let {id,name,image,location,status,species,gender} =x
            return <Col className='col-6 position-relative mb-4' key={id} >
            <div className='cards d-flex '>
                <img src={image} className='img-fluid img'></img>
                <div style={{padding:'10px'}} className='content ms-2'>
                    <div className='fs-5 fw-bold mb-4 '>{name}</div>
                    <div className=''>
                        <div className='fs-5'>Last Location</div>
                        <div className='fs-6'>{location.name}</div>
                    </div>
                    <div className='mt-3'>
                    <div className='fs-6'><b>Species-</b>{species}</div>
                    <div className='fs-5'><b>Gender-</b>{gender}</div>  
                    </div>
                </div>
            </div>
            {(() => {
                if(status === 'Dead'){
                    return(
                        <div className=' position-absolute badge bg-danger bad'>{status}</div>
                    );
                }
                else if(status === 'Alive'){
                    return(
                        <div className=' position-absolute badge bg-success bad'>{status}</div>
                    );
                }
                else{
                    return(
                        <div className=' position-absolute badge bg-secondary bad'>{status}</div>
                    );
                }
            })()}
            </Col>
        });
    }
    else{
        display ="No Characters Found:/"
    }
    return(
        <>
        <Container>
     <Row>
        < >{display}</> 
        </Row>
    </Container>
        </>
    )
}
export default Cards
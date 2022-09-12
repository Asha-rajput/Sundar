import { Row, Col } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SliderImage=(props)=>{
 const {data} =props;
 console.log('DAtaWEWRRTYY' ,data)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
return (
    <Row>
        {/* {data?.results?.map((item) => {
          return ( */}
        <Col md="12">
        {data?.results?.length>0 && <Carousel responsive={responsive} slidesToSlide={6}>
            {data?.results?.map((item) => {
              return (
                <img
                  src={"http://image.tmdb.org/t/p/w500/" + item?.poster_path}
                  alt={item?.altText}
                  style={{
                    height: "20rem",
                    width: "auto",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    backgroundColor: "yellow",
                  }}
                />
              );
            })}
          </Carousel>}
        </Col>
        {/* );
        })} */}
      </Row>
)
};
export default SliderImage;
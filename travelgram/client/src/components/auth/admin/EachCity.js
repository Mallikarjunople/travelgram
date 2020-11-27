import React,{useState} from 'react'
import authUser from '../../../App'
function EachCity() {
    const [blog, setBlog] = useState({});

    const viewHandle = () => {};
    const editHandle = () => {
      
    };
    const deleteHandle = () => {
    //   authUser
    //     .delete(`/blogs/${props.blogid}`)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    };
  
    // useEffect(() => {
    //   authUser
    //     .get(`/blogs/${props.blogid}`)
    //     .then((res) => {
    //       setBlog(res.data.blog);
    //       console.log(res.data.blog);
    //     })
    //     .catch((err) => console.log(err));
    // }, []);
    return (
        <>


        
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  mt-3 my-3">
            <div className="card">
              <div className="card-horizontal">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="img-square-wrapper">
                      <img
                        className=""
                        src="http://via.placeholder.com/300x180"
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="card-body mx-2">
                      <h4 className="card-title">sdhfjhsdf
                          {/* {blog.Title} */}
                          </h4>
                      <p className="card-text">sdfsdnflksnsdfsdnflksnsdfsdnflksnsdfsdnflksn
                      
                          {/* {blog.Body} */}
                          </p>
                    </div>
                    <div className="">
                      <button
                      type="button"
                        className="btn btn-primary mx-1"
                        onClick={viewHandle}
                      >
                        View
                      </button>
                      <button
                      type="button"
                        className="btn btn-success mx-1"
                        onClick={editHandle}
                      >
                        Edit
                      </button>
                      <button
                      type="button"
                        className="btn btn-danger mx-1"
                        onClick={deleteHandle}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default EachCity

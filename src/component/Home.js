import React, {useEffect} from "react";

function Home(props){
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "HOME";
    }, []);

    return(
        <div className="Home">
            <img src="https://cdn.pixabay.com/photo/2016/03/23/17/26/music-note-1275177__340.png" alt="" />
            <h3 className="home-name">Đỗ Hoàng Phúc</h3>
            <h3 className="home-mssv">4501104178</h3>
            <h3 className="home-email">4501104178@student.hcmue.edu.vn</h3>
        </div>
    );
}

export default Home;
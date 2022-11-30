import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "./store/actionCreator";
import { goto } from "@/api";
import { Button } from "antd";
import Header from '@/components/header'
import "./home.less";

function Home(props) {
    const { myHomeData, setData } = props

    const navigate = useNavigate()

    return (
        <div className="P-home">
            <Header title='Home' info={() => { console.log('info:home') }} />
            <h1>Home Page</h1>
            <div className="ipt-con">
                login store: myData = {myHomeData}
            </div>
            <div className="ipt-con">
                <Button onClick={() => { setData('123456') }}>点击更改home store的myData</Button>
            </div>
            <div className="ipt-con">
                <Button onClick={() => goto('/login')}>组件外跳转</Button>
            </div>

            <div className="ipt-con">
                <Button onClick={() => navigate('/login')}>返回登录</Button>
            </div>
        </div>
    )
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state) => ({
    // 数组第一个元素的home，对应的是src/store/reducer.js中定义的home分库的名称
    myHomeData: state.getIn(['home', 'myHomeData'])
})

// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispatch) => ({
    // setDate(data) {dispatch(actionCreators.setData(data))}
    setData: (data) => dispatch(actionCreators.setData(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
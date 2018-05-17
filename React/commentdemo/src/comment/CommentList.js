import React,{Component} from 'react';
import CommentItem from './CommentItem.jsx';
class CommentList extends Component{
    constructor(props){
        super(props);
        this.state={
            commentList:[
                {id:1,name:'Bridie',comment:'Hello,Bridie'},
                {id:2,name:'Carolyne',comment:'Hello,Carolyne'},
                {id:3,name:'Kaia',comment:'Hello,Kaia'},
                {id:4,name:'Kylie',comment:'Hello,Kylie'},
                {id:5,name:'Kenna',comment:'Hello,Kenna'},
                {id:6,name:'Granville',comment:'Hello,Granville'},
                {id:7,name:'Angel',comment:'Hello,Angel'}
            ]
        }
    }

    render(){
        return(
            <div>
                评论列表
                {this.state.commentList.map(item=><CommentItem {...item} key={item.id} />)}
            </div>
        );
    }
}
export default CommentList;
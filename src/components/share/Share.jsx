import { EmojiEmotions, Label, Room } from "@mui/icons-material";
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';

export default function Share() {
  return (
    <div className="share">
    <div className="shareWraper">
        <div className="shareTop">
            <img className="shareProfileImg" src="./assets/person/pity.jpeg" alt="" />
            <input placeholder="whats going" className="shareInput" />
        </div>
        <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">photo or video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="pink" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
            <button className="shareBtn">Share</button>
            
        </div>

    </div>
    </div>
  )
}

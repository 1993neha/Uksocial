import "./sidebar.css"
import { RssFeed, Chat, PlayCircle, Group, Bookmark, QuestionMark, Work, Event } from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWraper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItems">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItems">
          <PlayCircle className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItems">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItems">
          <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItems">
          <QuestionMark className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItems">
          <Work className="sidebarIcon"/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItems">
          <Event className="sidebarIcon"/>
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
      </div>
      <button className="sidebarButton">Show more</button>
      <hr className="sidebarHr"/>
      <ul className="sidebarFrdList">
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>
        <li className="sidebarFrd">
          <img className="sidebarFrdImg" src=".\assets\person\ube.jpeg" alt="" />
          <span className="sidebarFrdName">John</span>
        </li>

      </ul>
    </div>
  )
}

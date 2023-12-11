import "../App.css";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/joy/Badge";
import Typography from "@mui/joy/Typography";
import Avatar from "@mui/joy/Avatar";

export const Header = () => {
  return (
    <div id="header-container">
      <div id="left-content">
        <div>
          <AppsIcon style={{ fill: "#ffff" }} />
        </div>
        <div>
          <MenuIcon style={{ fill: "#ffff" }} />
        </div>
        <div>
          <h3 id="header-text">Appknit Tech</h3>
        </div>
      </div>
      <div id="right-content">
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <Badge badgeContent={1} variant="solid">
            <Typography fontSize="xl">💌</Typography>
          </Badge>
        </div>
        <div>
          <Badge badgeContent={1} variant="solid">
            <Typography fontSize="xl">💌</Typography>
          </Badge>
        </div>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA994hpL3PMmq0scCuWOu0LGsjef49dyXVg&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

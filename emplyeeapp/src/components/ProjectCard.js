import Typography from "@mui/material/Typography";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import LinearProgress from "@mui/joy/LinearProgress";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ProjectCard = ({ info }) => {
  const {
    title,
    description,
    completed,
    openTask,
    projectLeader,
    team,
    deadLine,
    progress,
  } = info;
  return (
    <div id="project-card-container">
      <div id="small-container">
        <Typography variant="h5" gutterBottom style={{ margin: 0, padding: 0 }}>
          {title}
        </Typography>
        {`${openTask} open tasks,${completed} tasks completed`}
      </div>
      <div id="small-container">
        <Typography
          variant="body2"
          gutterBottom
          style={{ margin: 0, padding: 0, textAlign: "justify" }}
        >
          {description}
        </Typography>
      </div>
      <div id="small-container">
        <Typography variant="h6" gutterBottom style={{ margin: 0, padding: 0 }}>
          Deadline:
        </Typography>
        {deadLine}
      </div>
      <div id="small-container">
        <Typography variant="h6" gutterBottom style={{ margin: 0, padding: 0 }}>
          Project leader:
        </Typography>
        <Avatar alt="Remy Sharp" src={projectLeader} />
      </div>
      <div id="small-container">
        <Typography variant="h6" gutterBottom style={{ margin: 0, padding: 0 }}>
          Team:
        </Typography>
        <AvatarGroup>
          {team?.map((mem) => (
            <Avatar alt="Remy Sharp" src={mem} />
          ))}
        </AvatarGroup>
      </div>
      <div id="small-container">
        <Typography variant="h6" gutterBottom style={{ margin: 0, padding: 0 }}>
          Progress:
        </Typography>
        <LinearProgress determinate value={50} />
      </div>
      <div style={{ position: "absolute", top: "5px", right: "8px" }}>
        {" "}
        <IconButton aria-label="more" id="long-button" aria-haspopup="true">
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

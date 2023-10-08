import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard(props) {
  const { img, heading, fullnames, desc, subject , id} = props;
  const navigate = useNavigate()
  return (
    <Card
      sx={{
        maxWidth: "1044px",
        paddingBottom: "40px",
        borderBottom: "2px solid rgba(0, 0, 0, 0.18)",
        boxShadow: "none",
      }}
    >
      <CardActionArea
        disabled
        sx={{ display: "flex", alignItems: "start", gap: "30px" }}
      >
        <CardMedia
          component="img"
          image={img}
          alt="green iguana"
          sx={{
            height: "260px",
            width: "250px",
            marginTop: "20px",
            borderRadius: "5px  ",
          }}
        />
        <CardContent>
          <Typography
            sx={{
              fontSize: "28px",
              color: "#000",
              fontWeight: "500",
              lineHeight: "36px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {heading}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "20px",
              color: "#000",
              fontWeight: "500",
              lineHeight: "28px",
            }}
            gutterBottom
          >
            Subject: {" "}
            <span className="text-[20px] text-[#000000DE/87%] font-[400] leading-7">
              {subject}
            </span>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "20px",
              color: "#000",
              fontWeight: "500",
              lineHeight: "28px",
            }}
            gutterBottom
          >
            Work author: {" "}
            <span className="text-[20px] text-[#000000DE/87%] font-[400] leading-7">
              {fullnames}
            </span>
          </Typography>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "400", lineHeight: "28px" }}
            variant="body2"
            color="text.secondary"
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="text-end">
        <Button variant="contained" onClick={()=>{navigate(`/aboutProject/${id}`)}}
        >
          More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-5 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Button>
      </div>
    </Card>
  );
}

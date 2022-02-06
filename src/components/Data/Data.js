import PropTypes from "prop-types";
import {
    StatBlock,
    Title,
    List,
    ListItem,
    Label,
    Percent,
} from "./Data.styled";

export default function Statistics({ stats, title }) {
    return (
        <StatBlock>
            {title && <Title>{title}</Title>}

            <List>
                {stats.map(({ id, label, percentage }) => (
                    <ListItem key={id}>
                        <Label>{label}</Label>
                        <Percent>{percentage}%</Percent>
                    </ListItem>
                ))}
            </List>
        </StatBlock>
    );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
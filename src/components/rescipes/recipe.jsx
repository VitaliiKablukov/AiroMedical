import { Link } from 'react-router-dom';
import { Img, Li } from './recipes.styled';
export const Recipe = ({ recipe, addSelectedRecipes }) => {
  const { image_url, id } = recipe;
  return (
    <Li key={id}>
      <Link to={`${id}`}>
        <Img src={image_url} alt="beer" />
        <input type="checkbox" onClick={() => addSelectedRecipes(id)} />
      </Link>
    </Li>
  );
};

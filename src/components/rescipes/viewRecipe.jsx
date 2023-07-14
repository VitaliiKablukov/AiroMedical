import { useParams } from 'react-router-dom';
import { Img, Li, Section, Ul } from './recipes.styled';
import useRecipesStore from '../../Zustand/store';
export const ViewRecipe = () => {
  const { id } = useParams();
  console.log(id);
  const recipes = useRecipesStore(state => state.recipes);
  const recipe = recipes.find(res => Number(res.id) === Number(id));

  console.log(recipe);
  return (
    <Section>
      <Ul>
        <Li key={recipe.id}>
          <Img src={recipe.image_url} alt="beer" />
        </Li>
      </Ul>
    </Section>
  );
};

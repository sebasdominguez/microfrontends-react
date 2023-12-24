import {
  NotFound_Section,
  NotFound_Container,
  NotFound_Content,
  NotFound_Title,
  NotFound_Description,
  BackToHomeButton,
} from './styles';

export default () => {
  return (
    <NotFound_Section>
      <NotFound_Container>
        <NotFound_Content>
          <NotFound_Title>
            <span className='sr-only'>Error</span>404
          </NotFound_Title>
          <NotFound_Description>
            Sorry, we couldn't find this page.
          </NotFound_Description>
          <NotFound_Description isSubText>
            But dont worry, you can find plenty of other things on our homepage.
          </NotFound_Description>
          <BackToHomeButton to='/'>Back to homepage</BackToHomeButton>
        </NotFound_Content>
      </NotFound_Container>
    </NotFound_Section>
  );
};

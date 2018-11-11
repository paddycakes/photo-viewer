import { HomeMenuPage } from './pages/home-menu.po';
import {
  assertOnHomeMenuPage,
  assertWelcomeMessageIsDisplayed,
  assertTwoClickableOptions
} from './utils/assertions';

describe('Home Menu Page', () => {
  let page: HomeMenuPage;

  beforeEach(() => {
    page = new HomeMenuPage();
    page.navigateTo();
  });

  it('should be able to navigate to home menu page', () => {
    assertOnHomeMenuPage(page);
  });

  it('should display welcome message', () => {
    assertWelcomeMessageIsDisplayed(page);
  });

  it('should have 2 clickable options', () => {
    assertTwoClickableOptions(page);
  });
});

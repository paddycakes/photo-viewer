import { ViewPhotosPage } from './pages/view-photos.po';
import {
  assertOnViewPhotosPage,
  assertCarrouselViewerIsDisplayed,
  assertCorrectCounterText,
  assertBothPreviousAndNextThumbnailsAreDisplayed
} from './utils/assertions';
import { givenNextThumbnailIsClicked } from './utils/givens';

describe('View Photos Page', () => {
  let page: ViewPhotosPage;

  beforeEach(() => {
    page = new ViewPhotosPage();
    page.navigateTo();
  });

  it('should be able to navigate to view photos page', () => {
    assertOnViewPhotosPage(page);
  });

  it('should display correct counter text', () => {
    assertCorrectCounterText(page);
  });

  it('should display the carrousel viewer', () => {
    assertCarrouselViewerIsDisplayed(page);
  });

  it('should display only the next thumbnail initially', () => {
    assertCarrouselViewerIsDisplayed(page);
  });

  it('should display both the previous and next thumbnails when next thumbnail is clicked', () => {
    givenNextThumbnailIsClicked(page);
    assertBothPreviousAndNextThumbnailsAreDisplayed(page);
  });
});

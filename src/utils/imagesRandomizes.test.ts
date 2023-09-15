import { imagesRandomizer } from './imagesRandomizer';

describe('imagesRandomizer function', () => {
  it('returns an empty array when input images is null', () => {
    const result = imagesRandomizer([], 3);
    expect(result).toEqual([]);
  });

  it('returns an empty array when input images is an empty array', () => {
    const result = imagesRandomizer([], 3);
    expect(result).toEqual([]);
  });

  it('returns an array with the correct size and shuffled elements', () => {
    const images = [
      { id: '1', url: 'image1.jpg' },
      { id: '2', url: 'image2.jpg' },
      { id: '3', url: 'image3.jpg' },
      { id: '4', url: 'image4.jpg' },
      { id: '5', url: 'image5.jpg' },
    ];

    const size = 3;

    const result = imagesRandomizer(images, size);

    // Check if the result is an array with the expected size
    expect(result).toHaveLength(size * 2); // Doubled for pairs

    // Check if the elements are shuffled
    const isShuffled = result.some((image, index) => {
      return image.id !== images[index].id;
    });

    expect(isShuffled).toBe(true);
  });
});
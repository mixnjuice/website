import { mockComponent } from './index';

describe('utilities', () => {
  describe('mockComponent', () => {
    it('exists', () => {
      expect(mockComponent).toBeInstanceOf(Function);
    });

    it('can create a simple React component', () => {
      const type = 'test';
      const result = mockComponent(type);

      expect(result).toBeDefined();
      const component = result();

      expect(component).toBeDefined();
      expect(component.type).toBe(type);
    });

    it('can create a React component with props', () => {
      const type = 'test';
      const props = {
        test: 'value'
      };
      const result = mockComponent(type, props);

      expect(result).toBeDefined();
      const component = result();

      expect(component).toBeDefined();
      expect(component.type).toBe(type);
      expect(component.props).toEqual(expect.objectContaining(props));
    });
  });
});

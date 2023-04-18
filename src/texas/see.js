test('calls handleConnect with correct parameters on node connect', async () => {
    // Arrange
    const allEdges = [{ id: 'edge-1', source: 'node-1', target: 'node-2' }];
    const allNodes = [
      { id: 'node-1', type: 'CustomNode', position: { x: 100, y: 100 }, data: { text: 'Node 1' } },
      { id: 'node-2', type: 'CustomNode', position: { x: 200, y: 100 }, data: { text: 'Node 2' } },
    ];
    const instance = { getEdges: jest.fn(() => allEdges), getNodes: jest.fn(() => allNodes), setNodes: jest.fn(), setEdges: jest.fn() };
    const handleConnect = jest.spyOn(CustomNode.prototype, 'handleConnect');
    const { getByTestId } = render(<CustomNode data={{ text: 'Test Node' }} />);
    const sourceHandle = getByTestId('source-handle');
    const targetHandle = getByTestId('target-handle');
  
    // Act
    fireEvent(sourceHandle, new MouseEvent('mousedown'));
    fireEvent(targetHandle, new MouseEvent('mousemove'));
    fireEvent(targetHandle, new MouseEvent('mouseup'));
  
    // Assert
    expect(handleConnect).toHaveBeenCalled();
    expect(handleConnect).toHaveBeenCalledWith({
      source: 'node-1',
      sourceHandle: 'source',
      target: 'node-2',
      targetHandle: 'target',
      isTarget: true,
      edge: expect.objectContaining({ id: expect.any(String), source: 'node-1', target: 'node-2' }),
    });
  });
  
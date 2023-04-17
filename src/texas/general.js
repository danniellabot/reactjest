const instanceMock = {
    getNodes: jest.fn().mockReturnValue([{ id: 'node1', data: { nodeType: 'Question' } }, { id: 'node2', data: { nodeType: 'Answer' } }]),
    getEdges: jest.fn().mockReturnValue([]),
  };
  
  test('should call onConnect when two nodes are connected', () => {
    const onConnectMock = jest.fn();
    const { getByTestId } = render(
      <>
        <Handle type="source" position="bottom" node={{ id: 'node1', data: { nodeType: 'Question' } }} />
        <Handle type="target" position="top" node={{ id: 'node2', data: { nodeType: 'Answer' } }} data-testid="target" onConnect={onConnectMock} />
      </>
    );
  
    const sourceHandle = getByTestId('node1-bottom');
    const targetHandle = getByTestId('target-top');
  
    fireEvent.mouseDown(sourceHandle);
    fireEvent.mouseDown(targetHandle);
    fireEvent.mouseUp(targetHandle);
  
    expect(onConnectMock).toHaveBeenCalledWith({ source: 'node1', target: 'node2' }, instanceMock);
  });

  const instanceMock = {
    getNodes: jest.fn().mockReturnValue([{ id: 'node1', data: { nodeType: 'Question' } }, { id: 'node2', data: { nodeType: 'Question' } }]),
    getEdges: jest.fn().mockReturnValue([{ id: 'edge1', source: 'node1', target: 'node2' }]),
  };
  
  test('should not call onConnect when two conflicting nodes are connected', () => {
    const onConnectMock = jest.fn();
    const { getByTestId } = render(
      <>
        <Handle type="source" position="bottom" node={{ id: 'node1', data: { nodeType: 'Question' } }} />
        <Handle type="target" position="top" node={{ id: 'node2', data: { nodeType: 'Question' } }} data-testid="target" onConnect={onConnectMock} />
      </>
    );
  
    const sourceHandle = getByTestId('node1-bottom');
    const targetHandle = getByTestId('target-top');
  
    fireEvent.mouseDown(sourceHandle);
    fireEvent.mouseDown(targetHandle);
    fireEvent.mouseUp(targetHandle);
  
    expect(onConnectMock).not.toHaveBeenCalled();
  });

  
  const instanceMock = {
    getNodes: jest.fn().mockReturnValue([{ id: 'node1', data: { nodeType: 'Question' } }, { id: 'node2', data: { nodeType: 'Answer' } }]),
    getEdges: jest.fn().mockReturnValue([]),
    deleteNode: jest.fn(),
  };
  
  test('should call deleteNode when a source node is connected to a target node', async () => {
    const onConnectMock = jest.fn();
    const { getByTestId } = render(
      <>
        <Handle type="source" position="bottom" node={{ id: 'node1', data: { nodeType: 'Question' } }} />
        <Handle type="target" position="top" node={{ id: 'node2', data: { nodeType: 'Answer' } }} data-testid="target" onConnect={onConnectMock} />
      </>
    );
  
    const sourceHandle = getByTestId('node1-bottom');
    const targetHandle = getByTestId('target-top');
  
    fireEvent.mouseDown(sourceHandle);
    fireEvent.mouseDown(targetHandle);
    fireEvent.mouseUp(targetHandle);
  
    await waitFor(() => expect(onConnectMock).toHaveBeenCalled());
  
    expect(instanceMock.deleteNode).toHaveBeenCalledWith('node1');
  });
  
  const instanceMock = {
    getNodes: jest.fn().mockReturnValue([{ id: 'node1', data: { nodeType: 'Question' } }, { id: 'node2', data: { nodeType: 'Answer' } }]),
    getEdges: jest.fn().mockReturnValue([]),
    deleteNode: jest.fn(),
  };
  
  test('should call deleteNode when a source node is connected to a target node', async () => {
    const onConnectMock = jest.fn();
    const { getByLabelText } = render(
      <>
        <Handle type="source" position="bottom" node={{ id: 'node1', data: { nodeType: 'Question' } }} aria-label="source-node1" />
        <Handle type="target" position="top" node={{ id: 'node2', data: { nodeType: 'Answer' } }} onConnect={onConnectMock} aria-label="target-node2">
          <div data-testid="figure" />
        </Handle>
      </>
    );
  
    const sourceHandle = getByLabelText('source-node1');
    const targetHandle = getByLabelText('target-node2');
  
    fireEvent.mouseDown(sourceHandle);
    fireEvent.mouseDown(targetHandle);
    fireEvent.mouseUp(targetHandle);
  
    await waitFor(() => expect(onConnectMock).toHaveBeenCalled());
  
    expect(instanceMock.deleteNode).toHaveBeenCalledWith('node1');
  });
  
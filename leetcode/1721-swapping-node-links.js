//IN
//head of a linked list
//integer k

//OUT
//head as swapped at the kth from end and head

const swapNodes = (head, k) => {
  let endIndex = head.length - k;
  let headSide = head[k - 1];
  let endSide = head[endIndex];
  head[k - 1] = endSide;
  head[endIndex] = headSide;
  return head;
}

const testHead = [1,2,3,4,5];
const testIndex = 2

console.log(swapNodes(testHead,testIndex))

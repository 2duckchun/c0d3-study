// Splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// splice 메서드는 어레이의 기존 엘리먼트들을 삭제하거나 다른 엘리먼트로 대체함으로써 어레이의 컨텐츠들을 변경한다.

// The syntax of splice() is:
// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// splice 메서드의 문법은 어레이.splice(시작 인덱스, 삭제할 요소 갯수, 대체할 요소들) 이다.


// start (시작 인덱스)
// The index at which to start changing the array.
// 배열을 바꾸는 기준점이 되는 인덱스를 설정한다.


// If start is greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many element as item[n*] provided.
// 만약 start가 배열의 길이보다 더 큰 수라면, start는 배열의 길이만큼 자동으로 셋팅되며, 이 경우, 어떤 엘리먼트도 삭제되지 않는다.
// 다만 무언가를 첨가하는 기능을 넣는다면, 배열의 끝에 엘리먼트가 첨가된다.


// If negative, it will begin that many elements from the end of the array. (In this case, the origin -1, meaning -*n* is the index of the nth last element, and is therefore equivalent to the index of array.length - *n*.)
// 만약 start값이 음수라면, 어레이의 뒷 요소부터 시작하게 된다.
// -2를 썼다면, 마지막 요소의 nth last element가 선택되게 된다.
// 즉, array.length - negative start 와 같다.
// array = [1, 2, 3, 4, 5] => array.length = 5
// array.splice(-2)는 5 - 2 = index 3을 지목하게 된다.
// 뒤에서는 2번째 요소가 된다.


// If array.length + *start* is less than 0, it will begin from index 0.
// array.length와 start값의 합이 0보다 작다면, index는 0부터 시작한다.
// ex) array = [1, 2] // array.splice(-5)
// => 인덱스는 0부터 시작.


// deleteCount | Optional
// An integer indicating the number of elements in the array to remove from start.
// deleteCount는 정수값을 넣어야하며, start지점부터 어디까지 엘리먼트를 삭제해야 하는지 알려준다.

// If deleteCount is omitted, or if its value is equal to or larger than array.length - *start* (that is, if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted.
// 만약에 deleteCount가 누락되거나, 이 값이 남은 배열의 길이보다 크거나 같다면 start 요소부터 그 뒤의 모든 요소들이 전부 삭제된다.

// Note: In IE8, it won't delete all when deleteCount is omitted.
// IE8에서는 좀 다르다...

// If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).
// deleteCount가 0이거나 음수인 경우, 어떠한 엘리먼트들도 삭제되지 않는다. 즉, 아이템추가같은 것을 넣어주지 않는다면 딱히 변하는게 없다.


// `item1, item2, ...`  | Optional
// The elements to be added to the array, beginning from index start. If you do not specify any elements, splice() will only remove elements from the array.
// 엘리먼트들이 어레이에 첨가되며, start부터 시작된다. 만약 아무것도 넣어주지 않는다면 splice 메서드는 그냥 삭제하는 기능만을 하게될 것이다. (deletecount와 적절히 엮일 경우)

// Return value
// An array containing the deleted elements.
// 삭제된 엘리먼트를 포함하는 어레이를 리턴값으로 갖는다.

// If only one element is removed, an array of one element is returned.
// 만약 하나의 엘리먼트만 삭제된다면, 하나의 요소를 가진 어레이가 리턴된다.

// If no elements are removed, an empty array is returned.
// 만약 아무 엘리먼트도 삭제되지 않았따면, 빈 배열이 리턴된다.
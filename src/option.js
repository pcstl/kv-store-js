// A simple option data type used to simplify key-value queries.

// --- Base data type ---
function Option() { };

// --- Option data type implementation ---
function Some(value) {
    this.value = value;
}
Some.prototype = Object.create(Option.prototype);

function None(value) { };
None.prototype = Object.create(Option.prototype);

// --- Constructors ---
Option.some = (value) => {
    return new Some(value);
};

Option.none = () => {
    return new None();
};

// we require fromNullable to return Option.some on undefined
// because JavaScript Maps will return undefined on missing keys.
// This way, we can wrap queries on maps with Option.fromNullable
// in order to get better safety.
Option.fromNullable = (value) => {
    if (value === null || value === undefined) {
	return Option.none();
    } else {
	return Option.some(value);
    }
};

// --- Predicates ---
Option.prototype.hasValue = false;
Some.prototype.hasValue = true;

// --- Methods ---
Option.prototype.get = function() {
    throw new TypeError("Can't extract value from Option.none.");
};
Some.prototype.get = function() {
    return this.value;
};

export default Option;

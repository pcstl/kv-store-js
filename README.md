[![Build Status](https://travis-ci.org/pcstl/kv-store-js.svg?branch=master)](https://travis-ci.org/pcstl/kv-store-js)

# Usage
After cloning the repository, run ```npm install``` in order to install dependencies.

In order to run the program, navigate to the root directory and run ```npm start```.
This will build the program into the ```build``` directory.
To run the test suites, run ```npm test``` in the root directory.

In order to deploy the program, run ```npm build``` and copy the ```build``` directory to
any directory you wish. The program can then be ran through the command ```node index.js```.

# Command Line Interface
The following commands are available. All commands are case-insensitive, although their arguments are not.
Commands are separated by newlines. Multiple commands can be inserted at once by inserting newlines into
the input, and will be processed individually. The program can be terminated by pressing Ctrl-C.

    SET <key> <value>

Sets &lt;key&gt; to &lt;value&gt;. &lt;key&gt; and &lt;value&gt; must not contain any whitespace and &lt;key&gt; is case-sensitive.

    GET <key>

Prints the value previously attributed to &lt;key&gt;, or prints NULL in case there is none.
&lt;key&gt; must not contain any whitespace. &lt;key&gt; is case-sensitive.

    SUM

Prints the sum of all integer values currently inserted into the key-value store.

    BEGIN

Starts a transaction. While the transaction is open, any changes made are temporary
and can be discarded using ```ROLLBACK``` or made permanent using ```COMMIT```.

    ROLLBACK

Reverts all changes made since the last BEGIN command. Fails if there is no open transaction.

    COMMIT

Includes all changes made since the last BEGIN command into the previous transaction, or
makes all changes in the current transaction permanent if the current transaction is the only
one. Fails if there is no open transaction.


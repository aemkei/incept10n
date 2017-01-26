IMAGE=source/input.jpg
SCRIPT=source/input.html
OUTPUT_IMG=index.jpg
OUTPUT_HTML=index.html

OFFSET=7
BYTES=3387

rm $OUTPUT_IMG $OUTPUT_HTML
cp $IMAGE $OUTPUT_IMG
cat $SCRIPT | dd of=$OUTPUT_IMG bs=1 seek=$OFFSET conv=notrunc count=$BYTES
cp $OUTPUT_IMG $OUTPUT_HTML
package logging

import "go.uber.org/zap"

// NullLogger represents a singleton logger that discards all output.
// nolint:gochecknoglobals
var NullLogger = zap.NewNop().Sugar()

func getNullLogger(module string) Logger {
	return NullLogger
}
